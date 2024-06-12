import { render } from '@testing-library/react';
import App from '../App';

describe('render App correctly', () => {
  test('renders the App snapshot correctly', () => {
    const Apprenderer = render(<App />);
    expect(Apprenderer).toMatchSnapshot();
  });
});
