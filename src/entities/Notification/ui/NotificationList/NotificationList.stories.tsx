import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NotificationList } from './NotificationList'

export default {
    title: 'entities/NotificationList',
    component: NotificationList,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: __API__ + '/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description:
                            'Ставьте лайки, подписывайтесь, все до встречи, ребюятшуи, и пока!',
                    },
                    {
                        id: '2',
                        title: 'Уведомление',
                        description:
                            'Ставьте лайки, подписывайтесь, все до встречи, ребюятшуи, и пока!',
                    },
                    {
                        id: '3',
                        title: 'Уведомление',
                        description:
                            'Ставьте лайки, подписывайтесь, все до встречи, ребюятшуи, и пока!',
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = args => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
