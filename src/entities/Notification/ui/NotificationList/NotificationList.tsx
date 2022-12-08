import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/Skeleton/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import cls from './NotificationList.module.scss'

interface notificationListProps {
    className?: string
}

export const NotificationList: FC<notificationListProps> = props => {
    const { className } = props

    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    })

    if (isLoading) {
        return (
            <VStack gap='16' max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width={'100%'} border={'8px'} height='80px' />
                <Skeleton width={'100%'} border={'8px'} height='80px' />
                <Skeleton width={'100%'} border={'8px'} height='80px' />
            </VStack>
        )
    }

    return (
        <VStack gap='16' max className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map(item => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    )
}
