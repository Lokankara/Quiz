import { render, screen, waitFor } from '@testing-library/react';
import { ResultPage } from '../ResultPage';
import * as api from '../../api';
import { AnswerDto } from '../../types';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../api');

const mockedApi = api as jest.Mocked<typeof api>;

describe('ResultPage Component', () => {
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
    mockedApi.getAnswers.mockResolvedValue([]);

    render(
      <MemoryRouter>
        <ResultPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  test('displays answers when available', async () => {
    mockedApi.getAnswers.mockResolvedValue([mockAnswer]);

    render(
      <MemoryRouter>
        <ResultPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Question')).toBeInTheDocument();
    });

    expect(screen.getByText('Correct')).toBeInTheDocument();
    expect(screen.getByText('Explanation')).toBeInTheDocument();
  });

  test('displays incorrect answers correctly', async () => {
    const incorrectAnswer = { ...mockAnswer, correct: false };
    mockedApi.getAnswers.mockResolvedValue([incorrectAnswer]);

    render(
      <MemoryRouter>
        <ResultPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Question')).toBeInTheDocument();
    });

    expect(screen.getByText('Incorrect')).toBeInTheDocument();
  });

 test('renders different tabs', async () => {
    mockedApi.getAnswers.mockResolvedValue([mockAnswer]);

    render(
      <MemoryRouter>
        <ResultPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Restart')).toBeInTheDocument();
      expect(screen.getByText('Exam')).toBeInTheDocument();
      expect(screen.getByText('Results')).toBeInTheDocument();
      expect(screen.getByText('Statistics')).toBeInTheDocument();
    });
  });
});