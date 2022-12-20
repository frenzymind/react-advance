import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Page } from './Page'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'widget/Page',
    component: Page,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = args => (
    <Page
        {...args}
        // eslint-disable-next-line react/no-children-prop
        children={
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum porro deleniti quis!
                Illum incidunt doloribus quod, cupiditate, sint laudantium rerum ad quasi nam,
                aspernatur accusamus. Eum quisquam maxime odit ullam.
            </div>
        }
    />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
