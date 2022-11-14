import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Choose value',
    options: [
        { value: '1', content: 'Something 1' },
        { value: '2', content: 'Something 2' },
        { value: '3', content: 'Something 3' },
    ],
}
