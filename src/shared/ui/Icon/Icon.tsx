import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import type { FC } from 'react'

interface iconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon: FC<iconProps> = props => {
    const { className, Svg, inverted, ...otherProps } = props

    return (
        <Svg
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            className={classNames(cls.Icon, { [cls.inverted]: inverted }, [className])}
        ></Svg>
    )
}
