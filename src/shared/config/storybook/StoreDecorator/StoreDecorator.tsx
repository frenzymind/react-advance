import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
}

// eslint-disable-next-line react/display-name
export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
    // eslint-disable-next-line react/display-name
    (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={state as StateSchema}
                asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
    }
