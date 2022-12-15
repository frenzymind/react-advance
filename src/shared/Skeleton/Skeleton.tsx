import type { CSSProperties, FC } from 'react'

import cls from './Skeleton.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'

interface skeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string | number
}

export const Skeleton: FC<skeletonProps> = props => {
    const { className, width, height, border } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }

    return <div className={classNames(cls.Skeleton, {}, [className])} style={styles}></div>
}
