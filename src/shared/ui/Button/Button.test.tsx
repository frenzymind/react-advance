import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from '../Button/Button'

describe('Button', () => {
    test('Button exist', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Button with clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        // screen.debug()
    })
})
