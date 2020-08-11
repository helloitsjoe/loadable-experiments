import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('Renders app', () => {
  const { container, queryByText } = render(<App />);
  expect(queryByText('Home Page')).toBeTruthy();
  fireEvent.click(queryByText('About'));
  expect(container.textContent).toMatch('Some Words About Me');
  expect(queryByText('Some Words About Me')).toBeTruthy();
});
