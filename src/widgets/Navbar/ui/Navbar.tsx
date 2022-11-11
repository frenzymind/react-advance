import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

const NoMemoNavbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const [isAuthOpen, setIsAuthOpen] = useState(false)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
                    {t('LOG_OUT')}
                </Button>
                <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('LOG_IN')}
            </Button>
            {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
        </div>
    )
}

export const Navbar = memo(NoMemoNavbar)
