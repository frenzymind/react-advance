import { getUserAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
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
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={'D.N.S. Skills Application'}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                    className={cls.createBtn}
                >
                    {t('CREATE_ARTICLE')}
                </AppLink>
                <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
                    {t('LOG_OUT')}
                </Button>
                <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
            </header>
        )
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('LOG_IN')}
            </Button>
            {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
        </header>
    )
}

export const Navbar = memo(NoMemoNavbar)
