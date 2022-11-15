import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'
import { <FTName | capitalcase> } from './<FTName | capitalcase>'

export default {
    title: '<FTStoryGroup | lowercase>/<FTName | capitalcase>',
    component: <FTName | capitalcase>,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof <FTName | capitalcase>>

const Template: ComponentStory<typeof <FTName | capitalcase>> = args => <<FTName | capitalcase> {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
