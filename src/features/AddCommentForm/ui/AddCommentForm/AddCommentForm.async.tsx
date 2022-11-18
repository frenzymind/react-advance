import { addCommentFormProps } from './AddCommentForm'
import { FC, lazy } from 'react'

export const AddCommentFormAsync = lazy<FC<addCommentFormProps>>(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // Тестовая задержка
            setTimeout(() => resolve(import('./AddCommentForm')), 1500)
        }),
)
