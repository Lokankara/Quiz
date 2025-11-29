package com.quiz.card.service;


import com.quiz.card.model.FlashCardDto;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.locks.ReentrantReadWriteLock;

@Component
public class Warehouse {

    private final Deque<FlashCardDto> deck = new LinkedList<>();
    private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
    private final Queue<SseEmitter> emitters = new ConcurrentLinkedQueue<>();

    public void seed(Collection<FlashCardDto> cards) {
        lock.writeLock().lock();
        try {
            deck.clear();
            List<FlashCardDto> shuffled = new ArrayList<>(cards);
            Collections.shuffle(shuffled);
            deck.addAll(shuffled);
            publishCount();
        } finally {
            lock.writeLock().unlock();
        }
    }

    public Optional<FlashCardDto> takeFirst() {
        lock.writeLock().lock();
        try {
            if (deck.isEmpty()) return Optional.empty();
            FlashCardDto card = deck.removeFirst();
            publishCount();
            return Optional.of(card);
        } finally {
            lock.writeLock().unlock();
        }
    }

    public int getAvailableCount() {
        lock.readLock().lock();
        try {
            return deck.size();
        } finally {
            lock.readLock().unlock();
        }
    }

    public List<FlashCardDto> snapshotAvailable() {
        lock.readLock().lock();
        try {
            return new ArrayList<>(deck);
        } finally {
            lock.readLock().unlock();
        }
    }

    public void removeById(Long id) {
        lock.writeLock().lock();
        try {
            if (deck.removeIf(c -> Objects.equals(c.getId(), id))) {
                publishCount();
            }
        } finally {
            lock.writeLock().unlock();
        }
    }

    private void publishCount() {
        int count = getAvailableCount();
        List<SseEmitter> dead = new ArrayList<>();
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(SseEmitter.event().name("available-count").data(count));
            } catch (IOException | IllegalStateException e) {
                dead.add(emitter);
            }
        }
        emitters.removeAll(dead);
    }

    public SseEmitter subscribe() {
        SseEmitter emitter = new SseEmitter(0L);
        emitters.add(emitter);
        emitter.onCompletion(() -> emitters.remove(emitter));
        emitter.onTimeout(() -> emitters.remove(emitter));
        try {
            emitter.send(SseEmitter.event().name("initial").data(getAvailableCount()));
        } catch (IOException e) {
            emitters.remove(emitter);
        }
        return emitter;
    }
}
