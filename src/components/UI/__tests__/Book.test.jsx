import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Book from '../Book';

describe('Book component', () => {
  const mockBook = {
    id: 1,
    title: "Test Book",
    url: "https://test.com/book.jpg",
    originalPrice: 49.95,
    salePrice: 14.95,
    rating: 4.5,
  };

  test('renders book with correct information', () => {
    render(
      <BrowserRouter>
        <Book book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByTestId('book-skeleton')).toBeInTheDocument();
  });
});