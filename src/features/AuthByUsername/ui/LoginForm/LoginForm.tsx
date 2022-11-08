import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = props => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type='text'
                className={cls.input}
                autoFocus
                placeholder={t('LOGIN_ENTER_USER_NAME')}
            />
            <Input type='text' className={cls.input} placeholder={t('LOGIN_ENTER_PASSWORD')} />
            <Button className={cls.loginBtn}>{t('USER_ENTER_FORM')}</Button>
        </div>
    )
}
