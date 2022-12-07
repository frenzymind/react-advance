import { ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { useTheme } from 'shared/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer = (props: DrawerProps) => {
    const { className, children, onClose, isOpen, lazy } = props
    const { theme } = useTheme()

    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
}
