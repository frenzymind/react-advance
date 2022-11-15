import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'
import Articlepage from './Articlepage'

export default {
    title: 'pages/Articlepage',
    component: Articlepage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Articlepage>

const Template: ComponentStory<typeof Articlepage> = args => <Articlepage {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
