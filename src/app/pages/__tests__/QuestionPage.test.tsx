import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuestionPage from '../QuestionPage';
import * as api from '../../api';
import { FlashCardDto } from '../../types';

jest.mock('../../api');

const mockedApi = api as jest.Mocked<typeof api>;

describe('QuestionPage Component', () => {
  const mockCard: FlashCardDto = {
    id: 1,
    question: 'Test Question',
    answers: [
      { text: 'Option 1', correct: false },
      { text: 'Option 2', correct: true }
    ],
    explanation: 'Explanation',
    multiSelect: false
 };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state initially', async () => {
    mockedApi.getRandomQuestion.mockResolvedValue(mockCard);

    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  test('displays question when loaded', async () => {
    mockedApi.getRandomQuestion.mockResolvedValue(mockCard);

    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Question')).toBeInTheDocument();
    });
  });

  test('displays answers correctly', async () => {
    mockedApi.getRandomQuestion.mockResolvedValue(mockCard);

    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
  });

  test('handles single selection', async () => {
    mockedApi.getRandomQuestion.mockResolvedValue(mockCard);
    mockedApi.submitAnswer.mockResolvedValue({ 
      id: 1, 
      question: 'Test Question', 
      correct: true, 
      explanation: 'Explanation' 
    });

    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement);

    const submitButton = screen.getByText('Submit');
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Correct');
    });
  });

  test('handles multi-selection', async () => {
    const multiSelectCard = {
      ...mockCard,
      multiSelect: true
    };
    mockedApi.getRandomQuestion.mockResolvedValue(multiSelectCard);

    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Question')).toBeInTheDocument();
    });

    const option1Element = screen.getByText('Option 1');
    const option2Element = screen.getByText('Option 2');
    
    fireEvent.click(option1Element);
    fireEvent.click(option2Element);

    const submitButton = screen.getByText('Submit');
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);
  });
});