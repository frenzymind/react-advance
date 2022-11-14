import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import avatar from 'shared/assets/tests/avatar.jpg'

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

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
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
