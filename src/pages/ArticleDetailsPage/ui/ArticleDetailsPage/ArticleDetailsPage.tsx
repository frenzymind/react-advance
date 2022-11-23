import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitEffect } from 'shared/lib/hooks/useInitEffect/useInitEffect'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { getArticleRecommendIsLoading } from '../../model/selectors/recommend'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { fetchRecommendArticles } from '../../model/services/fetchRecommendArticles/FetchRecommendArticles'
import { articleDetailsPageReducer } from '../../model/slice'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleRecommend } from '../../model/slice/articleDetailsPageRecommendSlice'
import cls from './ArticleDetailsPage.module.scss'
import { VStack } from 'shared/ui/Stack'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    // articleDetailsComments: articlDetailsCommentsReducer,
    // articleDetailsRecommend: articleDetailsPageRecommendReducer,
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = props => {
    const { className } = props

    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const recommend = useSelector(getArticleRecommend.selectAll)
    const recommendIsLoading = useSelector(getArticleRecommendIsLoading)
    const dispatch = useAppDispatch()

    useInitEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchRecommendArticles())
    })

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch],
    )

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('ARTICLE_NOT_FOUND')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        title={t('ARTICLES_RECOMMEND')}
                        className={cls.commentTitle}
                    />
                    <ArticleList
                        articles={recommend}
                        isLoading={recommendIsLoading}
                        className={cls.recommendations}
                        target='_blank'
                    />
                    <Text
                        size={TextSize.L}
                        title={t('ARTICLES_COMMENTS_TITLE')}
                        className={cls.commentTitle}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList isLoading={commentsIsLoading} comments={comments} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
