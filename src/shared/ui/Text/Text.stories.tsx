import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'
import { Text, TextSize, TextTheme } from './Text'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Big city life',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Big city life',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Big city life',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Big city life',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'Big city life',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
    size: TextSize.L,
}

export const Error = Template.bind({})
Error.args = {
    title: 'Big city life',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
    theme: TextTheme.ERROR,
}
