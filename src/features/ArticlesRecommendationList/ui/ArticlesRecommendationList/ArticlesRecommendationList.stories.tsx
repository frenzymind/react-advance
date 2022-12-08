import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticlesRecommendationList } from './ArticlesRecommendationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article } from '@/entities/Article'

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
}

export default {
    title: 'features/ArticlesRecommendationList',
    component: ArticlesRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: __API__ + '/articles?_limit=3',
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
} as ComponentMeta<typeof ArticlesRecommendationList>

const Template: ComponentStory<typeof ArticlesRecommendationList> = args => (
    <ArticlesRecommendationList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
