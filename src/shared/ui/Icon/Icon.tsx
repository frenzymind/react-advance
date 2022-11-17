import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import type { FC } from 'react'

interface iconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<iconProps> = props => {
    const { className, Svg } = props

    return <Svg className={classNames(cls.Icon, {}, [className])}></Svg>
}
