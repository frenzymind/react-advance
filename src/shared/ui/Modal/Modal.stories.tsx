import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'


export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sit ipsam obcaecati in possimus veniam dolore similique ducimus magni, recusandae est rem officiis sapiente et corrupti placeat. Perferendis aspernatur possimus labore quasi consequuntur? Maxime nulla aliquid ullam error perferendis magnam vitae quia.',
}
