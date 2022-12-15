import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

import { StateSchema } from '@/app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: Dispatch
    getState: () => StateSchema
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: jest.MockedFn<any>
    api: jest.MockedFunctionDeep<AxiosStatic>

    constructor(
        public actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)

        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        })

        return result
    }
}
