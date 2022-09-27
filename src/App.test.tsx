import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './NavBar';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/E-commerce App/i);
  expect(linkElement).toBeInTheDocument();
});
