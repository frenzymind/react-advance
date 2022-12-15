import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotificationItem } from './NotificationItem'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = args => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
