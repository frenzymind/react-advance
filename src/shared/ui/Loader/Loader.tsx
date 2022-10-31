import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'
import type { FC } from 'react'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = props => {
    const { className } = props

    return (
        <div className={classNames(cls.ldsEllipsis, {}, [className])}>
            {/* we can do this because of exportLocalsConvention css-loader moduleoptions
            In other case we can use bracket notation:  cls['class-name'] */}

            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
