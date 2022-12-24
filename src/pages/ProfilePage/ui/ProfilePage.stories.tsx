import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfilePage from './ProfilePage'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/avatar.jpg'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/Profile',
    component: ProfilePage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 32,
                country: Country.Armenia,
                lastname: 'Ivanov',
                first: 'Ivan',
                city: 'Mars',
                currency: Currency.EUR,
                avatar: avatar,
            },
        },
    }),
]
