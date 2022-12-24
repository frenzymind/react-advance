import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loader } from './Loader'


export default {
    title: 'widget/Loader',
    component: Loader,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
