import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

// Mock the child components since we're only testing component composition
jest.mock('../../components/Landing page', () => () => <div data-testid="landing" />);
jest.mock('../../components/Highlights', () => () => <div data-testid="highlights" />);
jest.mock('../../components/Featured', () => () => <div data-testid="featured" />);
jest.mock('../../components/Discounted', () => () => <div data-testid="discounted" />);
jest.mock('../../components/Explore', () => () => <div data-testid="explore" />);
jest.mock('../../components/Footer', () => () => <div data-testid="footer" />);

describe('Home component', () => {
  test('renders all main sections', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    // Check that all components are rendered
    expect(getByTestId('landing')).toBeInTheDocument();
    expect(getByTestId('highlights')).toBeInTheDocument();
    expect(getByTestId('featured')).toBeInTheDocument();
    expect(getByTestId('discounted')).toBeInTheDocument();
    expect(getByTestId('explore')).toBeInTheDocument();
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});