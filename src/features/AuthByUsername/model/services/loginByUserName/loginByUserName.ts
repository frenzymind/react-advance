import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import i18next from 'i18next'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage'

interface LoginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<
    User,
    LoginByUserNameProps,
    { rejectValue: string }
>('login/loginByUserName', async ({ username, password }, thunkAPI) => {
    try {
        const response = await axios.post<User>('http://192.168.200.18:8000/login', {
            username,
            password,
        })

        if (!response.data) {
            throw new Error()
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkAPI.dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(i18next.t('LOGIN_ERROR'))
    }
})
