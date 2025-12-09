import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Question from '../Question';
import { FlashCardDto, OptionDto } from '../../types';

describe('Question Component', () => {
  const mockOption1: OptionDto = { text: 'Option 1', correct: false };
  const mockOption2: OptionDto = { text: 'Option 2', correct: true };
  const mockCard: FlashCardDto = {
    id: 1,
    question: 'Test Question',
    options: [mockOption1, mockOption2],
    explanation: 'Explanation',
    multiSelect: false
  };

  const mockMultiSelectCard: FlashCardDto = {
    ...mockCard,
    id: 2,
    question: 'Multi-select Test Question',
    multiSelect: true
  };

  test('renders question text correctly', () => {
    render(
      <Question 
        size={10} 
        card={mockCard} 
        onSubmit={jest.fn()} 
      />
    );
    expect(screen.getByText('#56. Test Question')).toBeInTheDocument();
  });

  test('renders options correctly', () => {
    render(
      <Question 
        size={10} 
        card={mockCard} 
        onSubmit={jest.fn()} 
      />
    );
    expect(screen.getByText('{text:Option 1,correct:false}')).toBeInTheDocument();
    expect(screen.getByText('{text:Option 2,correct:true}')).toBeInTheDocument();
  });

  test('handles single selection correctly', () => {
    const mockOnSubmit = jest.fn();
    render(
      <Question 
        size={10} 
        card={mockCard} 
        onSubmit={mockOnSubmit} 
      />
    );

    const optionElement = screen.getByText('{text:Option 1,correct:false}');
    fireEvent.click(optionElement);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith([JSON.stringify(mockOption1)]);
  });

  test('handles multi-selection correctly', () => {
    const mockOnSubmit = jest.fn();
    render(
      <Question 
        size={10} 
        card={mockMultiSelectCard} 
        onSubmit={mockOnSubmit} 
      />
    );

    const option1Element = screen.getByText('{text:Option 1,correct:false}');
    const option2Element = screen.getByText('{text:Option 2,correct:true}');
    
    fireEvent.click(option1Element);
    expect(mockOnSubmit).not.toHaveBeenCalled();
    
    fireEvent.click(option2Element);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith([
      JSON.stringify(mockOption1),
      JSON.stringify(mockOption2)
    ]);
  });

  test('toggles selection in multi-select mode', () => {
    const mockOnSubmit = jest.fn();
    render(
      <Question 
        size={10} 
        card={mockMultiSelectCard} 
        onSubmit={mockOnSubmit} 
      />
    );

    const option1Element = screen.getByText('{text:Option 1,correct:false}');
    
    fireEvent.click(option1Element);
    expect(mockOnSubmit).not.toHaveBeenCalled();
    
    fireEvent.click(option1Element);
    expect(mockOnSubmit).not.toHaveBeenCalled();
    
    fireEvent.click(option1Element);
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('updates UI when options are selected', () => {
    render(
      <Question 
        size={10} 
        card={mockCard} 
        onSubmit={jest.fn()} 
      />
    );

    const optionElement = screen.getByText('{text:Option 1,correct:false}');
    fireEvent.click(optionElement);

    expect(optionElement.closest('label')).toHaveClass('bg-sky-400');
  });
});