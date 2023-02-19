import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button component test', () => {
  test('should render text that was passed as children', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('should render class which was passed through theme prop', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
