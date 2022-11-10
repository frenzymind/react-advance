import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = props => {
    const { children, initialState, asyncReducers } = props

    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>)

    return <Provider store={store}>{children}</Provider>
}
