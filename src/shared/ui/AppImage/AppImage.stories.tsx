import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from ''@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from ''@/shared/providers/ThemeProvider'
import { AppImage } from './AppImage'

export default {
    title: 'shared/AppImage',
    component: AppImage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = args => <AppImage {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
