import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = props => {
    const { children, initialState } = props

    const store = createReduxStore(initialState)

    return <Provider store={store}>{children}</Provider>
}
