import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, TextSize, TextTheme } from './Text'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

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

export const SizeS = Template.bind({})
SizeS.args = {
    title: 'Big city life',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
    size: TextSize.S,
}

export const SizeM = Template.bind({})
SizeM.args = {
    title: 'Big city life',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dignissimos?',
    size: TextSize.M,
}

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
