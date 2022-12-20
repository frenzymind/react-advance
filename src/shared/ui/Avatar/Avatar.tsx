import { CSSProperties, FC, useMemo } from 'react'

import { Skeleton } from '../../Skeleton/Skeleton'
import UserIcon from '../../assets/icons/user-filled.svg'
import { AppImage } from '../AppImage'
import { Icon } from '../Icon'

import cls from './Avatar.module.scss'

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

    const fallback = <Skeleton width={size} height={size} border={'50%'} />
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    )
}
