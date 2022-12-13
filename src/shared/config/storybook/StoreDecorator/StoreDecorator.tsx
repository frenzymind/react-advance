/* eslint-disable test-fsd/public-api-imports */
// TODO: Fix testing public API
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice'
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
}

// eslint-disable-next-line react/display-name
export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
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
