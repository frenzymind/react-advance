import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'
import AvatarImg from './avatar.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: AvatarImg,
    size: 150,
}

export const Small = Template.bind({})
Small.args = {
    src: AvatarImg,
    size: 50,
}

export const Alt = Template.bind({})
Alt.args = {
    size: 150,
    alt: 'avatar',
}
