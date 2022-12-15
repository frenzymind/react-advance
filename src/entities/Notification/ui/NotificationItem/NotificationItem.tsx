import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import type { FC } from 'react'
import { INotification } from '../../model/types/notifications'
import { Card, CardTheme } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'

interface notificationItemProps {
    className?: string
    item: INotification
}

export const NotificationItem: FC<notificationItemProps> = props => {
    const { className, item } = props

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    )

    if (item.href) {
        return (
            <a className={cls.link} href={item.href} target='_blank' rel='noreferrer'>
                {content}
            </a>
        )
    }

    return content
}
