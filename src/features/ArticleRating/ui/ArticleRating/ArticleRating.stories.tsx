import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: __API__ + '/article-ratings?userId=1&articleId=1',
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = args => <ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
    articleId: '1',
}

Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
]

export const WithoutRate = Template.bind({})
WithoutRate.args = {
    articleId: '1',
}

WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
]

WithoutRate.parameters = {
    mockData: [
        {
            url: __API__ + '/article-ratings?userId=1&articleId=1',
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
}
