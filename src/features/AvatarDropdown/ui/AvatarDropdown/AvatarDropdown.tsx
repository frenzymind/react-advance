import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AvatarDropdown.module.scss'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown } from 'shared/ui/Popups'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface avatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<avatarDropdownProps> = props => {
    const { className } = props

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin || isManager

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction='bottom left'
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('NAVBAR_ADMIN'),
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    content: t('NAVBAR_USER_PROFILE'),
                    href: RoutePath.profile + '/' + authData.id,
                },
                {
                    content: t('LOG_OUT'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    )
}
