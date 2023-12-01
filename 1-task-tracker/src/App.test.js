import { render } from '@testing-library/react';
import App from './App';

test('renders app root element', () => {
  render(<App />);
  // TODO We should better use screen methods and avoid direct DOM access.
  const linkElement = document.querySelector('.App');
  expect(linkElement).toBeInTheDocument();
});
