import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { FC, MutableRefObject, ReactNode, useRef } from 'react'
import { useInfinitiScroll } from 'shared/lib/hooks/useInfinitiScroll/useInfinitiScroll'

interface pageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<pageProps> = props => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfinitiScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} className={cls.triggerRef} />
        </section>
    )
}
