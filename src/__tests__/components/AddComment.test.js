import { render } from '@testing-library/react';
import AddComment from '../../components/AddComment';

describe('render AddComment correctly', () => {
  const mockProps = {
    handleModalClose: jest.fn(),
    addCommentModalDisplay: 'none',
  };

  test('renders the AddComment snapshot correctly', () => {
    const Apprenderer = render(<AddComment {...mockProps} />);
    expect(Apprenderer).toMatchSnapshot();
  });

  test('renders the AddComment snapshot correctly when modal is displayed', () => {
    mockProps.addCommentModalDisplay = 'block';
    const Apprenderer = render(<AddComment {...mockProps} />);
    expect(Apprenderer).toMatchSnapshot();
  });
});
