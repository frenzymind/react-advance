import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'
import { Code } from './Code'

export default {
    title: 'shared/Code',
    component: Code,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = args => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
    text: `
    export default {
        title: 'shared/Code',
        component: Code,
    
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>
    `,
}

export const Dark = Template.bind({})
Dark.args = {
    text: `
export default {
    title: 'shared/Code',
    component: Code,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>
`,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
