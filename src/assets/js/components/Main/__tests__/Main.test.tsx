import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from '../Main.stories';

const { Default } = composeStories(stories);

describe('main', () => {
  it('should render correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
