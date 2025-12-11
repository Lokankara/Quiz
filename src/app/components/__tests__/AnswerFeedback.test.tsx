import { render, screen } from '@testing-library/react';
import AnswerFeedback from '../AnswerFeedback';
import { AnswerDto, OptionDto } from '../../types';

describe('AnswerFeedback Component', () => {
  const mockOption1: OptionDto = { text: 'Option 1', correct: true };
  const mockOption2: OptionDto = { text: 'Option 2', correct: false };
  const mockAnswerResult: AnswerDto = {
    id: 1,
    question: 'Test Question',
    correct: true,
    answers: [mockOption1, mockOption2]
  };

  test('renders correctly when answerResult is provided', () => {
    render(
      <AnswerFeedback
        answerResult={mockAnswerResult}
        question="Test Question"
      />
    );
    
    expect(screen.getByText('✓ Test Question')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('renders correctly for incorrect answer', () => {
    const incorrectResult = { ...mockAnswerResult, correct: false };
    render(
      <AnswerFeedback
        answerResult={incorrectResult}
        question="Test Question"
      />
    );
    
    expect(screen.getByText('✗ Test Question')).toBeInTheDocument();
  });

  test('renders correctly when answerResult is undefined', () => {
    render(<AnswerFeedback question="Test Question" />);
    
    expect(screen.queryByText('Test Question')).not.toBeInTheDocument();
  });

  test('applies correct styling for correct answer', () => {
    render(
      <AnswerFeedback
        answerResult={mockAnswerResult}
        question="Test Question"
      />
    );
    
    const feedbackContainer = screen.getByText('✓ Test Question').closest('.p-4');
    expect(feedbackContainer).toHaveClass('bg-green-100');
  });

  test('applies correct styling for incorrect answer', () => {
    const incorrectResult = { ...mockAnswerResult, correct: false };
    render(
      <AnswerFeedback
        answerResult={incorrectResult}
        question="Test Question"
      />
    );
    
    const feedbackContainer = screen.getByText('✗ Test Question').closest('.p-4');
    expect(feedbackContainer).toHaveClass('bg-red-100');
  });
});