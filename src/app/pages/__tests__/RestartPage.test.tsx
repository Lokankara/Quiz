import { render, screen, fireEvent } from '@testing-library/react';
import { RestartPage } from '../RestartPage';

describe('RestartPage Component', () => {
  const mockOnClose = jest.fn();
  const mockOnRestart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

 test('renders correctly with default props', () => {
    render(<RestartPage />);
    
    expect(screen.getByText('Select Quiz Set')).toBeInTheDocument();
    expect(screen.getByText('Quiz Set 0')).toBeInTheDocument();
    expect(screen.getByText('Quiz Set 1')).toBeInTheDocument();
    expect(screen.getByText('Quiz Set 2')).toBeInTheDocument();
    expect(screen.getByText('Quiz Set 3')).toBeInTheDocument();
    expect(screen.getByText('Quiz Set 4')).toBeInTheDocument();
    expect(screen.getByText('Quiz Set 5')).toBeInTheDocument();
  });

 test('calls onClose when close button is clicked', () => {
    render(<RestartPage onClose={mockOnClose} />);
    
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onRestart with correct index when a quiz set button is clicked', () => {
    render(<RestartPage onRestart={mockOnRestart} />);
    
    const quizSetButton = screen.getByText('Quiz Set 3');
    fireEvent.click(quizSetButton);
    
    expect(mockOnRestart).toHaveBeenCalledWith(3);
  });

  test('calls onClose when Escape key is pressed', () => {
    render(<RestartPage onClose={mockOnClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when a different key is pressed', () => {
    render(<RestartPage onClose={mockOnClose} />);
    
    fireEvent.keyDown(document, { key: 'Enter' });
    
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});