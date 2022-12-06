import { NotificationList } from 'entities/Notification'
import type { FC } from 'react'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationsButton.module.scss'

interface notificationsButtonProps {
    className?: string
}

export const NotificationsButton: FC<notificationsButtonProps> = props => {
    const { className } = props

    return (
        <Popover
            className={classNames(cls.NotificationsButton, {}, [className])}
            direction='bottom left'
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    )
}
