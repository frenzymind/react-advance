import { Reducer } from '@reduxjs/toolkit'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { ReduxStoreWithManager, StateSchemaKey, StateSchema } from '@/app/providers/StoreProvider'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
    const { children, reducers, removeAfterUnmount = true } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        // const mountedReducers = store.reducerManager.getMountedReducers()

        Object.entries(reducers).forEach(([name, reducer]) => {
            // const isMounted = mountedReducers[name as StateSchemaKey]

            // if (!isMounted) {
            if (store.reducerManager.add(name as StateSchemaKey, reducer)) {
                dispatch({ type: `@INIT ${name} reducer` })
            }

            // }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>{children}</>
}
