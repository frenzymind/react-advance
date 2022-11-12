import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginError.test', () => {
    test('should return user password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'pass',
            },
        }

        expect(getLoginPassword(state as StateSchema)).toEqual('pass')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
