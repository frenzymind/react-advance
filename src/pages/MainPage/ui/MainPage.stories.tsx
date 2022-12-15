import { ComponentStory, ComponentMeta } from '@storybook/react'

import MainPage from './MainPage'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'

export default {
    title: 'pages/MainPage',
    component: MainPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
