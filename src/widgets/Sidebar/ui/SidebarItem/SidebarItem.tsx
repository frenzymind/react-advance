import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { SidebarItemType } from '../../models/types/Sidebar'

import cls from './SidebarItem.module.scss'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'

interface SidebaritemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(function SidebarItem(props: SidebaritemProps) {
    const { item, collapsed } = props
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
})
