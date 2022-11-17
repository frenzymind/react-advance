import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import type { CSSProperties, FC } from 'react'

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
