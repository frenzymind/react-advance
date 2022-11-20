import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { FC, memo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../models/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

const NoMemoSidebar: FC<SidebarProps> = props => {
    const { className } = props

    const sideBarItemsList = useSelector(getSidebarItems)
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const itemsList = sideBarItemsList.map(item => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    ))

    return (
        <menu
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
            <div className={cls.items}>{itemsList}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </menu>
    )
}

export const Sidebar = memo(NoMemoSidebar)
