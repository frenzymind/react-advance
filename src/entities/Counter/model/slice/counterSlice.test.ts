import { counterReducer, counterActions } from './counterSlice'

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state = {
            value: 10,
        }

        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
    })

    test('increment', () => {
        const state = {
            value: 10,
        }

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
    })

    test('shoukd work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
    })
})
