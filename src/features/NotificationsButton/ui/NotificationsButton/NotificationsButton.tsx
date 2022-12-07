import { NotificationList } from 'entities/Notification'
import { FC, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { AnimationProvider } from 'shared/lib/components/AnimationProvider'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationsButton.module.scss'

interface notificationsButtonProps {
    className?: string
}

export const NotificationsButton: FC<notificationsButtonProps> = props => {
    const { className } = props

    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    )

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationsButton, {}, [className])}
                    direction='bottom left'
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    )
}
