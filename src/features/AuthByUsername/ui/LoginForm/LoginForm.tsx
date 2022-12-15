import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'
import { Text, TextTheme } from '@/shared/ui/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo(function LoginForm(props: LoginFormProps) {
    const { className } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoading)
    const error = useSelector(getLoginError)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }))
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('AUTH_FORM_TITLE')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    type='text'
                    className={cls.input}
                    autoFocus
                    placeholder={t('LOGIN_ENTER_USER_NAME')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type='text'
                    className={cls.input}
                    placeholder={t('LOGIN_ENTER_PASSWORD')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('USER_ENTER_FORM')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
