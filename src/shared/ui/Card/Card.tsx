import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import type { FC, HTMLAttributes, ReactNode } from 'react'

interface cardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
}

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

export const Card: FC<cardProps> = props => {
    const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...otherProps} className={classNames(cls.Card, {}, [className, cls[theme]])}>
            {children}
        </div>
    )
}
