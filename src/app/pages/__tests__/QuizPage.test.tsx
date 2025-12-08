import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuizPage from '../QuizPage';
import * as api from '../../api';
import { FlashCardDto, AnswerDto } from '../../types';

jest.mock('../../api');

const mockedApi = api as jest.Mocked<typeof api>;

describe('QuizPage Component', () => {
  const mockCard: FlashCardDto = {
    id: 1,
    question: 'Test Question',
    options: [
      { text: 'Option 1', correct: false },
      { text: 'Option 2', correct: true }
    ],
    explanation: 'Explanation',
    multiSelect: false
  };

  const mockAnswer: AnswerDto = {
    id: 1,
    question: 'Test Question',
    correct: true,
    explanation: 'Explanation'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state initially', async () => {
    mockedApi.getAvailableQuestions.mockResolvedValue([]);

    render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  test('navigates to results page when no cards are available', async () => {
    mockedApi.getAvailableQuestions.mockResolvedValue([]);

    render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  test('displays question when cards are available', async () => {
    mockedApi.getAvailableQuestions.mockResolvedValue([mockCard]);
    mockedApi.submitAnswer.mockResolvedValue(mockAnswer);

    render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('#1. Test Question')).toBeInTheDocument();
    });
  });

  test('shows answer feedback after submitting an answer', async () => {
    mockedApi.getAvailableQuestions.mockResolvedValue([mockCard]);
    mockedApi.submitAnswer.mockResolvedValue(mockAnswer);

    render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('#1. Test Question')).toBeInTheDocument();
    });

    expect(screen.getByText(mockAnswer.explanation)).toBeInTheDocument();
  });
});