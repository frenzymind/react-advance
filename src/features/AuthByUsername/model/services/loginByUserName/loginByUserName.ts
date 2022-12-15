import { createAsyncThunk } from '@reduxjs/toolkit'
import i18next from 'i18next'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage'

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', {
                username,
                password,
            })

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            thunkAPI.extra.navigate?.('/about')
            // thunkAPI.fulfillWithValue('asd', 'asd')
            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(i18next.t('LOGIN_ERROR'))
        }
    },
)
