import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticlesPageFilter } from './ArticlesPageFilter'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

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
Normal.decorators = [StoreDecorator({})]
