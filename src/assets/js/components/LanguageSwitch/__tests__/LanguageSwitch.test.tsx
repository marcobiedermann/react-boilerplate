import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from '../LanguageSwitch.stories';

jest.mock('../../../utilities/environment');

const { Default } = composeStories(stories);

describe('language switch', () => {
  it('should render correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
