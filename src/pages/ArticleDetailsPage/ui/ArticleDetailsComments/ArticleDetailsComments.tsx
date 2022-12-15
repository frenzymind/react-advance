import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'

import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/AddCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect/useInitEffect'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'

interface articleDetailsCommentsProps {
    className?: string
    id?: string
}

export const ArticleDetailsComments: FC<articleDetailsCommentsProps> = props => {
    const { className, id } = props

    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    useInitEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch],
    )

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('ARTICLES_COMMENTS_TITLE')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    )
}
