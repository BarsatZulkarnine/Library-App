import { render, screen } from '@testing-library/react';
import Price from '../Price';

describe('Price component', () => {
  test('renders original price when no sale price', () => {
    render(<Price originalPrice={29.99} salePrice={null} />);
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  test('renders both prices when sale price exists', () => {
    render(<Price originalPrice={29.99} salePrice={19.99} />);
    expect(screen.getByText('$39.99')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
  });
});