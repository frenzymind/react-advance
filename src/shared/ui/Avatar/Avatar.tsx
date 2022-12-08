import cls from './Avatar.module.scss'
import { CSSProperties, FC, useMemo } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = props => {
    const { className, src, size, alt } = props

    const mods: Mods = {}

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [size])

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    )
}
