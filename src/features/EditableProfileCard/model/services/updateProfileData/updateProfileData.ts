import { createAsyncThunk } from '@reduxjs/toolkit'

import { ValidateProfileError } from '../../constants/ValidateProfileError'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfile } from '../validateProfile/validateProfile'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Profile } from '@/entities/Profile'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    const errors = validateProfile(formData)

    if (errors.length) {
        return rejectWithValue(errors)
    }

    try {
        const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
