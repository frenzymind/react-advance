import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

import type { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = props => {
    const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

    return (
        <Link
            // https://zhenyong.github.io/react/docs/transferring-props.html#consuming-and-transferring-the-same-prop
            {...otherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    )
}
