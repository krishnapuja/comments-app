import { render } from '@testing-library/react';
import CommentSection from '../../components/CommentSection';

describe('render CommentSection correctly', () => {
  const mockProps = {
    comments: [],
  };

  test('renders the CommentSection snapshot correctly', () => {
    const Apprenderer = render(<CommentSection {...mockProps} />);
    expect(Apprenderer).toMatchSnapshot();
  });
});
