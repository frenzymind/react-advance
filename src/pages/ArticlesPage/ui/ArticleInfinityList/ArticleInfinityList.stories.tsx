import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleInfinityList } from './ArticleInfinityList'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

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
Normal.decorators = [StoreDecorator({})]
