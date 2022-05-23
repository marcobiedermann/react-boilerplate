import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from '../Loader.stories';

const { Default } = composeStories(stories);

describe('loader', () => {
  it('should render correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
