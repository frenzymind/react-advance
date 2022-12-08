import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = props => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: size,
        [cls.disabled]: otherProps.disabled,
    }

    return (
        <button
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            type='button'
            className={classNames(cls.Button, mods, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}
