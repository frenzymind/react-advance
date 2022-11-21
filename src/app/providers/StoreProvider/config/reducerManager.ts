import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { MountedReducers, ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []
    const mountedReduces: MountedReducers = {}

    return {
        getReducerMap: () => reducers,

        getMountedReducers: () => mountedReduces,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return false
            }

            if (key in reducers) {
                return false
            }

            reducers[key] = reducer

            mountedReduces[key] = true

            combinedReducer = combineReducers(reducers)

            return true
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]

            keysToRemove.push(key)

            mountedReduces[key] = false

            combinedReducer = combineReducers(reducers)
        },
    }
}
