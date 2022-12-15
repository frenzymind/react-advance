import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from './Page'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

export default {
    title: 'shared/Page',
    component: Page,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = args => <Page {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
