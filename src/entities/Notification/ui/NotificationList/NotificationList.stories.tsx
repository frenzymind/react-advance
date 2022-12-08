import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'
import { NotificationList } from './NotificationList'

export default {
    title: 'entities/NotificationList',
    component: NotificationList,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = args => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
