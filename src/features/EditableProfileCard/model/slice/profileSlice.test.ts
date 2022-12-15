import { ValidateProfileError } from '../constants/ValidateProfileError'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema } from '../types/editableProfileCardSchema'

import { profileActions, profileReducer } from './profileSlice'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

const data = {
    username: 'admin',
    age: 32,
    country: Country.Armenia,
    lastname: 'Ivanov',
    first: 'Ivan',
    city: 'Mars',
    currency: Currency.EUR,
}

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        })
    })

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        })
    })

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'admin' } }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: 'qwerty' }),
            ),
        ).toEqual({
            form: { username: 'qwerty' },
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        })
    })

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        })
    })
})
