import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Root from './Root';

test('renders learn react link', () => {
  render(<Root />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
