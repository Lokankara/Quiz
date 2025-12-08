import { render, screen, fireEvent } from '@testing-library/react';
import { TabNav, TabType } from '../NavTab';

describe('NavTab Component', () => {
  const mockOnTabChange = jest.fn();
  const activeTab: TabType = 'results';

  test('renders all tabs correctly', () => {
    render(
      <TabNav 
        activeTab={activeTab} 
        onTabChange={mockOnTabChange} 
      />
    );

    expect(screen.getByText('Restart')).toBeInTheDocument();
    expect(screen.getByText('Exam')).toBeInTheDocument();
    expect(screen.getByText('Results')).toBeInTheDocument();
    expect(screen.getByText('Statistics')).toBeInTheDocument();
  });

  test('applies active styling to the active tab', () => {
    render(
      <TabNav 
        activeTab={activeTab} 
        onTabChange={mockOnTabChange} 
      />
    );

    const activeTabElement = screen.getByText('Results');
    expect(activeTabElement.parentElement).toHaveClass('border-blue-500', 'text-blue-600');
  });

  test('applies inactive styling to non-active tabs', () => {
    render(
      <TabNav 
        activeTab={activeTab} 
        onTabChange={mockOnTabChange} 
      />
    );

    const inactiveTabElement = screen.getByText('Restart');
    expect(inactiveTabElement.parentElement).toHaveClass('border-transparent', 'text-gray-500');
  });

  test('calls onTabChange when a tab is clicked', () => {
    render(
      <TabNav 
        activeTab={activeTab} 
        onTabChange={mockOnTabChange} 
      />
    );

    fireEvent.click(screen.getByText('Restart'));
    expect(mockOnTabChange).toHaveBeenCalledWith('restart');

    fireEvent.click(screen.getByText('Exam'));
    expect(mockOnTabChange).toHaveBeenCalledWith('exam');

    fireEvent.click(screen.getByText('Statistics'));
    expect(mockOnTabChange).toHaveBeenCalledWith('statistics');
  });

  test('does not call onTabChange for already active tab', () => {
    const mockOnTabChange = jest.fn();
    render(
      <TabNav 
        activeTab={'restart'} 
        onTabChange={mockOnTabChange} 
      />
    );

    fireEvent.click(screen.getByText('Restart'));
    expect(mockOnTabChange).toHaveBeenCalledWith('restart');
  });
});