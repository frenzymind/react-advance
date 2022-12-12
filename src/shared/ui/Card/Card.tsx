import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import type { FC, HTMLAttributes, ReactNode } from 'react'

interface cardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
    max?: boolean
}

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

export const Card: FC<cardProps> = props => {
    const { className, children, theme = CardTheme.NORMAL, max, ...otherProps } = props

    return (
        <div
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])}
        >
            {children}
        </div>
    )
}
