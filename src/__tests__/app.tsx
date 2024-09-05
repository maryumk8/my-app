import { render, screen } from '@testing-library/react';
import App from '../App';

test('Test name of app', () => {
  render(<App />);
  let title = screen.getByText('E-commerce');
  expect(title).toBeInTheDocument();
});
