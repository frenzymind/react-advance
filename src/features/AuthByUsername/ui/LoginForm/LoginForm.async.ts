import { LoginFormProps } from './LoginForm'
import { FC, lazy } from 'react'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // Тестовая задержка
            setTimeout(() => resolve(import('./LoginForm')), 1500)
        }),
)
