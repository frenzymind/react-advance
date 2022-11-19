import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import type { FC, HTMLAttributes, ReactNode } from 'react'

interface cardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card: FC<cardProps> = props => {
    const { className, children, ...otherProps } = props

    return (
        <div {...otherProps} className={classNames(cls.Card, {}, [className])}>
            {children}
        </div>
    )
}
