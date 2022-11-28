import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesRecommendationList } from './ArticlesRecommendationList';

export default {
    title: 'features/ArticlesRecommendationList',
    component: ArticlesRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesRecommendationList>;

const Template: ComponentStory<typeof ArticlesRecommendationList> = (args) => <ArticlesRecommendationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};