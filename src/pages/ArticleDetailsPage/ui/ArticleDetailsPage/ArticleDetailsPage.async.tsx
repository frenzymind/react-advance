import { lazy } from 'react'

export const ArticleDetailsPageASync = lazy(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // Тестовая задержка
            setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500)
        }),
)
