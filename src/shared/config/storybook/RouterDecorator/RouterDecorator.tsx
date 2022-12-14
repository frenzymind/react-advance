import { Story } from '@storybook/react'
// eslint-disable-next-line test-fsd/layer-imports
import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    )
}
