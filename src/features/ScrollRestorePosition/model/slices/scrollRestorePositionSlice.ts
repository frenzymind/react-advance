import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ScrollRestorePositionSchema } from '../types/ScrollRestorePositionSchema'

const initialState: ScrollRestorePositionSchema = {
    scroll: {},
}

export const scrollRestorePositionSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position
        },
    },
})

export const { actions: scrollActions } = scrollRestorePositionSlice
export const { reducer: scrollReducer } = scrollRestorePositionSlice
