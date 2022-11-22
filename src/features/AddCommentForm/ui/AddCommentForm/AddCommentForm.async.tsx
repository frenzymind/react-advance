import { addCommentFormProps } from './AddCommentForm'
import { FC, lazy } from 'react'

export const AddCommentFormAsync = lazy<FC<addCommentFormProps>>(() => import('./AddCommentForm'))
