import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './Navbar.module.scss'

import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationsButton } from '@/features/NotificationsButton'
import { RoutePath } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { Text, TextTheme } from '@/shared/ui/Text'

interface NavbarProps {
    className?: string
}

const NoMemoNavbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const [isAuthOpen, setIsAuthOpen] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true)
    }, [])

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
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationsButton />
                    <AvatarDropdown />
                </HStack>

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
