import { render, screen } from '@testing-library/react';
import AnswerFeedback from '../AnswerFeedback';
import { AnswerResult } from '../../types';

describe('AnswerFeedback Component', () => {
  const mockAnswerResult: AnswerResult = {
    correct: true,
    explanation: 'This is the explanation',
    options: [
      { text: 'Option 1', correct: true, explanation: 'Option 1 explanation' },
      { text: 'Option 2', correct: false, explanation: 'Option 2 explanation' }
    ]
  };

  test('renders correctly when answerResult is provided', () => {
    render(
      <AnswerFeedback 
        answerResult={mockAnswerResult} 
        explanationTitle="Test Question" 
      />
    );
    
    expect(screen.getByText('✓ Test Question')).toBeInTheDocument();
    expect(screen.getByText('✓ Test Question')).toBeInTheDocument();
    expect(screen.getByText('This is the explanation')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('renders correctly for incorrect answer', () => {
    const incorrectResult = { ...mockAnswerResult, correct: false };
    render(
      <AnswerFeedback 
        answerResult={incorrectResult} 
        explanationTitle="Test Question" 
      />
    );
    
    expect(screen.getByText('✗ Test Question')).toBeInTheDocument();
  });

  test('renders correctly when answerResult is null', () => {
    render(<AnswerFeedback answerResult={null} explanationTitle="Test Question" />);
    
    expect(screen.queryByText('Test Question')).not.toBeInTheDocument();
  });

  test('applies correct styling for correct answer', () => {
    render(
      <AnswerFeedback 
        answerResult={mockAnswerResult} 
        explanationTitle="Test Question" 
      />
    );
    
    const feedbackContainer = screen.getByText('✓ Test Question').closest('.p-6');
    expect(feedbackContainer).toHaveClass('bg-green-100');
  });

  test('applies correct styling for incorrect answer', () => {
    const incorrectResult = { ...mockAnswerResult, correct: false };
    render(
      <AnswerFeedback 
        answerResult={incorrectResult} 
        explanationTitle="Test Question" 
      />
    );
    
    const feedbackContainer = screen.getByText('✗ Test Question').closest('.p-6');
    expect(feedbackContainer).toHaveClass('bg-red-100');
  });

  test('displays option explanations', () => {
    render(
      <AnswerFeedback 
        answerResult={mockAnswerResult} 
        explanationTitle="Test Question" 
      />
    );
    
    expect(screen.getByText('Option 1 explanation')).toBeInTheDocument();
    expect(screen.getByText('Option 2 explanation')).toBeInTheDocument();
 });
});