import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('render Header correctly', () => {
  const mockProps = {
    handleAddCommentModalOpen: jest.fn(), 
    handleNotificationDisplay: jest.fn(), 
    notificationDisplay: 'block', 
    notificationFeed: [],
  };

  test('renders the Header snapshot correctly', () => {
    const Apprenderer = render(<Header {...mockProps} />);
    expect(Apprenderer).toMatchSnapshot();
  });
});
