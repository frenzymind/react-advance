import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = props => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>Main</span>
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>About</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    )
}
