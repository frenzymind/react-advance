import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = props => {
    const { className, children, theme, ...otherProps } = props

    return (
        <button
            {...otherProps}
            type='button'
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}
