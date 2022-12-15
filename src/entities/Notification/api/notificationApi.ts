import { INotification } from '../model/types/notifications'

import { rtkApi } from '@/shared/api/rtkApi'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getNotifications: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
})

export const useNotifications = notificationApi.useGetNotificationsQuery
