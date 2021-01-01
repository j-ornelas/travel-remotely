import { render, screen } from '@testing-library/react';
import { Videobackground } from './Videobackground';

test('renders learn react link', () => {
  render(<Videobackground />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
