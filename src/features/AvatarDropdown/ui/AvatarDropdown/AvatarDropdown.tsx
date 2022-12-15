import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { RoutePath } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'

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
            className={classNames('', {}, [className])}
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
