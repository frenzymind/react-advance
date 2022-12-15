import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AvatarDropdown } from './AvatarDropdown'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = args => <AvatarDropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
