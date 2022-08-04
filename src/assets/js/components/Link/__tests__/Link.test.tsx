/* eslint-disable import/no-extraneous-dependencies */

import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as stories from '../Link.stories';

const { Default, Internal } = composeStories(stories);

describe('link', () => {
  it('should render correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render internal correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Internal />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
