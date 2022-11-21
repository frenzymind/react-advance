import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useInfinitiScroll } from 'shared/lib/hooks/useInfinitiScroll/useInfinitiScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { scrollActions } from 'features/ScrollRestorePosition'
import { useLocation } from 'react-router-dom'
import { useInitEffect } from 'shared/lib/hooks/useInitEffect/useInitEffect'
import { useSelector } from 'react-redux'
import { getScrollPositionByPath } from 'features/ScrollRestorePosition/model/selectors/scrollRestorePositionSelector'
import { StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface pageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<pageProps> = props => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollPositionByPath(state, pathname),
    )

    useInfinitiScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

    useInitEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        console.log('scroll' + e.currentTarget.scrollTop)
        dispatch(
            scrollActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        )
    }, 500)

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} className={cls.triggerRef} />
        </section>
    )
}
