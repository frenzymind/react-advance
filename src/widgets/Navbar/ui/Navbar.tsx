import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthOpen, setIsAuthOpen] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('LOG_IN')}
            </Button>
            <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
        </div>
    )
}
