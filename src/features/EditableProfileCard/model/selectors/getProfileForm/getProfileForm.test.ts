import { getProfileForm } from './getProfileForm'

import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 32,
            country: Country.Armenia,
            lastname: 'Ivanov',
            first: 'Ivan',
            city: 'Mars',
            currency: Currency.EUR,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        }

        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
