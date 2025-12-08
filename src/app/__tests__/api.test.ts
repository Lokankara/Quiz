import axios from 'axios';
import * as api from '../api';
import { FlashCardDto, AnswerDto, ResultDto } from '../types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllQuestions', () => {
    test('fetches all questions successfully', async () => {
      const mockResponse: FlashCardDto[] = [
        {
          id: 1,
          question: 'Test Question 1',
          options: [{ text: 'Option 1', correct: true }, { text: 'Option 2', correct: false }],
          explanation: 'Explanation 1',
          multiSelect: false
        }
      ];
      
      mockedAxios.get.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions',
          method: 'get'
        }
      });

      const result = await api.getAllQuestions();
      
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/questions');
      expect(result).toEqual(mockResponse);
    });

    test('handles error when fetching questions fails', async () => {
      mockedAxios.get.mockRejectedValue(new Error('Network error'));

      await expect(api.getAllQuestions()).rejects.toThrow('Network error');
    });
  });

  describe('getRandomQuestion', () => {
    test('fetches a random question successfully', async () => {
      const mockResponse: FlashCardDto = {
        id: 1,
        question: 'Random Question',
        options: [{ text: 'Option 1', correct: true }],
        explanation: 'Explanation',
        multiSelect: false
      };
      
      mockedAxios.get.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions/random',
          method: 'get'
        }
      });

      const result = await api.getRandomQuestion();
      
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/questions/random');
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getAvailableQuestions', () => {
    test('fetches available questions successfully', async () => {
      const mockResponse: FlashCardDto[] = [
        {
          id: 1,
          question: 'Available Question',
          options: [{ text: 'Option 1', correct: true }],
          explanation: 'Explanation',
          multiSelect: false
        }
      ];
      
      mockedAxios.get.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions/available',
          method: 'get'
        }
      });

      const result = await api.getAvailableQuestions();
      
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/questions/available');
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getAvailableCount', () => {
    test('fetches available count successfully', async () => {
      const mockResponse = 5;
      
      mockedAxios.get.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions/available/count',
          method: 'get'
        }
      });

      const result = await api.getAvailableCount();
      
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/questions/available/count');
      expect(result).toEqual(mockResponse);
    });
 });

  describe('submitAnswer', () => {
    test('submits answer successfully', async () => {
      const mockResponse: AnswerDto = {
        id: 1,
        question: 'Test Question',
        correct: true,
        explanation: 'Explanation'
      };
      
      mockedAxios.post.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions/answers',
          method: 'post'
        }
      });

      const result = await api.submitAnswer(1, ['option1', 'option2']);
      
      expect(mockedAxios.post).toHaveBeenCalledWith(
        '/api/questions/answers',
        null,
        {
          params: {
            id: '1',
            options: ['option1', 'option2']
          }
        }
      );
      expect(result).toEqual(mockResponse);
    });
 });

  describe('getAnswers', () => {
    test('fetches answers successfully', async () => {
      const mockResponse: AnswerDto[] = [
        {
          id: 1,
          question: 'Test Question',
          correct: true,
          explanation: 'Explanation'
        }
      ];
      
      mockedAxios.get.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions/answers',
          method: 'get'
        }
      });

      const result = await api.getAnswers();
      
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/questions/answers');
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getResult', () => {
    test('fetches result successfully', async () => {
      const mockResponse: ResultDto = {
        total: 10,
        correct: 8,
        incorrect: 2,
        answeredIds: new Set([1, 2, 3])
      };
      
      mockedAxios.get.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions/result',
          method: 'get'
        }
      });

      const result = await api.getResult();
      
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/questions/result');
      expect(result).toEqual(mockResponse);
    });
  });

  describe('removeQuestion', () => {
    test('removes question successfully', async () => {
      const mockResponse: FlashCardDto = {
        id: 1,
        question: 'Test Question',
        options: [{ text: 'Option 1', correct: true }],
        explanation: 'Explanation',
        multiSelect: false
      };
      
      mockedAxios.delete.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions',
          method: 'delete'
        }
      });

      const result = await api.removeQuestion(1);
      
      expect(mockedAxios.delete).toHaveBeenCalledWith('/api/questions', {
        params: { id: 1 },
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('handleRestart', () => {
    test('handles restart successfully', async () => {
      mockedAxios.post.mockResolvedValue({
        data: {},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
          url: '/api/questions/restart',
          method: 'post'
        }
      });

      const originalLocation = window.location;
      Object.defineProperty(window, 'location', {
        value: { href: '' },
        writable: true
      });

      await api.handleRestart(2);
      
      expect(mockedAxios.post).toHaveBeenCalledWith('/api/questions/restart?fileIndex=2');
      expect(window.location.href).toBe('/');

      Object.defineProperty(window, 'location', {
        value: originalLocation,
        writable: true
      });
    });
 });
});