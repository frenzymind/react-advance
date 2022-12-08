import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'
import { NotificationsButton } from './NotificationsButton'

export default {
    title: 'features/NotificationsButton',
    component: NotificationsButton,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationsButton>

const Template: ComponentStory<typeof NotificationsButton> = args => (
    <NotificationsButton {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
