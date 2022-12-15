import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Popover } from './Popover'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

export default {
    title: 'shared/Popover',
    component: Popover,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = args => <Popover {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
