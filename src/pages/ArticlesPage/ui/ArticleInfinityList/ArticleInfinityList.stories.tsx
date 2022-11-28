import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'
import { ArticleInfinityList } from './ArticleInfinityList'

export default {
    title: 'pages/ArticleInfinityList',
    component: ArticleInfinityList,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfinityList>

const Template: ComponentStory<typeof ArticleInfinityList> = args => (
    <ArticleInfinityList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
