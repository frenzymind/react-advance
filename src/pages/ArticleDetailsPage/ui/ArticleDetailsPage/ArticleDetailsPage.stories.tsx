import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'
import ArticleDetailsPage from './ArticleDetailsPage'

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = args => <ArticleDetailsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
