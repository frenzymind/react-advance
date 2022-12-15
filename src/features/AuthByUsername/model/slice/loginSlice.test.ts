import { LoginSchema } from '../types/loginSchema'

import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('should set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' }
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('user'))).toEqual({
            username: 'user',
        })
    })

    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('pass'))).toEqual({
            password: 'pass',
        })
    })
})
