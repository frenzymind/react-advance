import { lazy } from 'react'

export const ArticlepageAsync = lazy(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // Тестовая задержка
            setTimeout(() => resolve(import('./Articlepage')), 1500)
        }),
)
