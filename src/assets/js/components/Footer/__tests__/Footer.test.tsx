/* eslint-disable import/no-extraneous-dependencies */

import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from '../Footer.stories';

const { Default } = composeStories(stories);

describe('footer', () => {
  it('should render correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
