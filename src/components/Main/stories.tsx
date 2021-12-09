import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Afrociberdelia',
    description: 'Chico Science e Nação Zumbi'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Vekio: Story = (args) => <Main {...args} />
