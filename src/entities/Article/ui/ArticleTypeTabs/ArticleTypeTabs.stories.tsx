import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'
import { ArticleTypeTabs } from './ArticleTypeTabs'

export default {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = args => <ArticleTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
