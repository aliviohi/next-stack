import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button', 'primary', 'md');
  });

  it('renders with custom variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button', { name: 'Secondary Button' });
    expect(button).toHaveClass('secondary');
  });

  it('renders with custom size', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button', { name: 'Large Button' });
    expect(button).toHaveClass('lg');
  });

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width Button</Button>);
    const button = screen.getByRole('button', { name: 'Full Width Button' });
    expect(button).toHaveClass('fullWidth');
  });

  it('renders in loading state', () => {
    render(<Button isLoading>Loading Button</Button>);
    const button = screen.getByRole('button', { name: 'Loading Button' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('loading');
    expect(button.querySelector('.spinner')).toBeInTheDocument();
  });

  it('renders in disabled state', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole('button', { name: 'Clickable Button' });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button
        disabled
        onClick={handleClick}
      >
        Disabled Button
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Disabled Button' });

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', () => {
    const handleClick = jest.fn();
    render(
      <Button
        isLoading
        onClick={handleClick}
      >
        Loading Button
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Loading Button' });

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref).toHaveBeenCalled();
  });

  it('renders all variants correctly', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const;

    variants.forEach((variant) => {
      const { unmount } = render(<Button variant={variant}>{variant} Button</Button>);
      const button = screen.getByRole('button', { name: `${variant} Button` });
      expect(button).toHaveClass(variant);
      unmount();
    });
  });

  it('renders all sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Button size={size}>{size} Button</Button>);
      const button = screen.getByRole('button', { name: `${size} Button` });
      expect(button).toHaveClass(size);
      unmount();
    });
  });

  it('passes through additional props', () => {
    render(
      <Button
        data-testid="test-button"
        aria-label="Test button"
      >
        Test Button
      </Button>,
    );
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('aria-label', 'Test button');
  });

  it('renders children correctly', () => {
    render(
      <Button>
        <span>Icon</span> Button Text
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Icon Button Text');
  });
});
