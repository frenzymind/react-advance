import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

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
