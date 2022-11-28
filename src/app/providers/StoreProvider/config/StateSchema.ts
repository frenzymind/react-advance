import {
    AnyAction,
    CombinedState,
    Dispatch,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { articleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { LoginSchema } from 'features/AuthByUsername'
import { ScrollRestorePositionSchema } from 'features/ScrollRestorePosition'
import { ArticlDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { ArticlePageSchema } from 'pages/ArticlesPage'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollRestorePosition: ScrollRestorePositionSchema

    // Async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: articleDetailsSchema
    // articleDetailsComments?: ArticleDetailsCommentsSchema
    // articleDetailsRecommend?: articleDetailsRecommendSchema
    articleDetailsPage?: ArticlDetailsPageSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlePageSchema
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => boolean
    remove: (key: StateSchemaKey) => void
    // true - mounted
    getMountedReducers: () => MountedReducers
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T, K = unknown> {
    rejectValue: T
    extra: ThunkExtraArg
    dispatch?: Dispatch
    state: StateSchema
    fulfilledMeta: K
}
