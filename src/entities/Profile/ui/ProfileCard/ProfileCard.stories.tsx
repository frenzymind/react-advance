import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileCard } from './ProfileCard'
import avatar from 'shared/assets/tests/avatar.jpg'

export default {
    title: 'entity/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = args => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: 'admin',
        age: 32,
        country: Country.Armenia,
        lastname: 'Ivanov',
        first: 'Ivan',
        city: 'Mars',
        currency: Currency.EUR,
        avatar: avatar,
    },
}

export const withError = Template.bind({})
withError.args = {
    error: 'true',
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
