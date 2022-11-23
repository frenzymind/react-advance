import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { FC, ReactNode, useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = props => {
    const { className, tabs, value, onTabClick } = props

    const clickHandler = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab)
            }
        },
        [onTabClick],
    )

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    className={cls.Tabs}
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}
