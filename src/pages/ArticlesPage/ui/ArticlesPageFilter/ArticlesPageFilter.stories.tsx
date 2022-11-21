import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'
import { ArticlesPageFilter } from './ArticlesPageFilter'

export default {
    title: 'pages/ArticlesPageFilter',
    component: ArticlesPageFilter,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilter>

const Template: ComponentStory<typeof ArticlesPageFilter> = args => <ArticlesPageFilter {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
