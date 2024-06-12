import { render } from '@testing-library/react';
import CommentCard from '../../components/CommentCard';

describe('render CommentCard correctly', () => {
  const mockProps = {
    name: 'mockName', 
    message: 'mock Message', 
    created:new Date(1466424490000),
  };

  test('renders the CommentCard snapshot correctly', () => {
    const Apprenderer = render(<CommentCard {...mockProps} />);
    expect(Apprenderer).toMatchSnapshot();
  });
});
