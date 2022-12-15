import { getLoginLoading } from './getLoginIsLoading'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        }

        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})
