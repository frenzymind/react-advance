import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import type { FC } from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlighn {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3'
interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlighn
    size?: TextSize
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

export const Text: FC<TextProps> = props => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlighn.LEFT,
        size = TextSize.M,
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div className={classNames(cls.text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}
