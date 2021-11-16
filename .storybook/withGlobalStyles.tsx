import GlobalStyles from '../src/styles/global'
import { StoryFn } from '@storybook/addons'

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles
