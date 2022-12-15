import { ValidateProfileError } from '../../constants/ValidateProfileError'

import { getProfileValidateErrors } from './getProfileValidateErrors'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        }

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ])
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
