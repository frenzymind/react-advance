import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: headers => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
            headers.set('Authorization', token)

            return headers
        },
    }),
    endpoints: _ => ({}),
})
