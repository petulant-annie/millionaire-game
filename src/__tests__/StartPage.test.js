import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { StartPage } from '../pages/StartPage';

test('renders learn react link', () => {
  render(<StartPage />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Start/i);
  expect(linkElement).toBeInTheDocument();
});
