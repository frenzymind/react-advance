import { ComponentStory, ComponentMeta } from '@storybook/react'

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
