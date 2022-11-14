import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import type { FC } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlighn {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}
interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlighn
}

export const Text: FC<TextProps> = props => {
    const { className, title, text, theme = TextTheme.PRIMARY, align = TextAlighn.LEFT } = props

    return (
        <div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}
