import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './reducerManager'

import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { scrollReducer } from '@/features/ScrollRestorePosition'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    // navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollRestorePosition: scrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
        // navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
