import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleSortSelector } from './ArticleSortSelector'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

export default {
    title: 'entities/ArticleSortSelector',
    component: ArticleSortSelector,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>

const Template: ComponentStory<typeof ArticleSortSelector> = args => (
    <ArticleSortSelector {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
