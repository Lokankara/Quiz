import { render, screen, waitFor } from '@testing-library/react';
import { StatisticsPage } from '../StatisticsPage';
import * as api from '../../api';
import { AnswerDto } from '../../types';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../api');

const mockedApi = api as jest.Mocked<typeof api>;

describe('StatisticsPage Component', () => {
  const mockAnswer: AnswerDto = {
    id: 1,
    question: 'Test Question',
    correct: true,
    explanation: 'Explanation'
  };

  const mockIncorrectAnswer: AnswerDto = {
    ...mockAnswer,
    id: 2,
    correct: false
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state initially', async () => {
    mockedApi.getAnswers.mockResolvedValue([]);

    render(
      <MemoryRouter>
        <StatisticsPage />
      </MemoryRouter>
    );

    expect(screen.queryByText('Exam results')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Exam results')).toBeInTheDocument();
    });
 });

  test('displays correct statistics for mixed answers', async () => {
    mockedApi.getAnswers.mockResolvedValue([mockAnswer, mockIncorrectAnswer]);

    render(
      <MemoryRouter>
        <StatisticsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Exam results')).toBeInTheDocument();
    });

    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('1/2')).toBeInTheDocument();
    expect(screen.getByText('1 correct answers')).toBeInTheDocument();
    expect(screen.getByText('1 incorrect answers')).toBeInTheDocument();
  });

  test('displays 100% when all answers are correct', async () => {
    mockedApi.getAnswers.mockResolvedValue([mockAnswer, { ...mockAnswer, id: 3 }]);

    render(
      <MemoryRouter>
        <StatisticsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Exam results')).toBeInTheDocument();
    });

    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('2/2')).toBeInTheDocument();
 });

  test('displays 0% when all answers are incorrect', async () => {
    mockedApi.getAnswers.mockResolvedValue([mockIncorrectAnswer, { ...mockIncorrectAnswer, id: 3 }]);

    render(
      <MemoryRouter>
        <StatisticsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Exam results')).toBeInTheDocument();
    });

    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByText('0/2')).toBeInTheDocument();
  });

  test('displays correct date format', async () => {
    mockedApi.getAnswers.mockResolvedValue([mockAnswer]);

    render(
      <MemoryRouter>
        <StatisticsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Exam results')).toBeInTheDocument();
    });

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    expect(screen.getByText(new RegExp(formattedDate))).toBeInTheDocument();
  });
});