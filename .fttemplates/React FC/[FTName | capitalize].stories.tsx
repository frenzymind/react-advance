import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from ''@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from ''@/shared/providers/ThemeProvider'
import { <FTName | capitalize> } from './<FTName | capitalize>'

export default {
    title: '<FTStoryGroup | lowercase>/<FTName | capitalize>',
    component: <FTName | capitalize>,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof <FTName | capitalize>>

const Template: ComponentStory<typeof <FTName | capitalize>> = args => <<FTName | capitalize> {...args} />

export const Normal = Template.bind({})
Normal.args = {}