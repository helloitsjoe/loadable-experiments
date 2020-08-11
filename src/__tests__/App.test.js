import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('Renders app', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('Home Page')).toBeTruthy();
  fireEvent.click(queryByText('About'));
  expect(queryByText('Some Words About Me')).toBeTruthy();
});
