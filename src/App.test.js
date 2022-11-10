import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('linked-link');
  expect(linkElement).toBeInTheDocument();
});


test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('linked-link');
  expect(linkElement.href).toContain('portfolio-wynne.herokuapp.com')
});