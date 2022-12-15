import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleDetailsComments } from './ArticleDetailsComments'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

export default {
    title: 'pages/ArticleDetailsComments',
    component: ArticleDetailsComments,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = args => (
    <ArticleDetailsComments {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
