import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Navbar } from './Navbar'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'widget/Navbar',
    component: Navbar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {}
AuthNavbar.decorators = [
    StoreDecorator({
        user: { authData: { id: '1', username: 'admin' } },
    }),
]
