import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/providers/ThemeProvider'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RatingCard } from './RatingCard'

export default {
    title: 'entities/RatingCard',
    component: RatingCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = args => <RatingCard {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
