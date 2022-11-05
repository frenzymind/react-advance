import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthOpen, setIsAuthOpen] = useState(false)

    const onTogglrModal = useCallback(() => {
        setIsAuthOpen(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onTogglrModal}
            >
                {t('LOG_IN')}
            </Button>
            <Modal isOpen={isAuthOpen} onClose={onTogglrModal}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe.
            </Modal>
        </div>
    )
}
