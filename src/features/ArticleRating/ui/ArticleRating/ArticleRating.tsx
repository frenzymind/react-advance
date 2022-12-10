import { RatingCard } from '@/entities/Rating'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/Skeleton/Skeleton'

export interface articleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<articleRatingProps> = props => {
    const { className, articleId } = props

    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' })
    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                })
            } catch (error) {
                console.log(error)
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    )

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback)
        },
        [handleRateArticle],
    )

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount)
        },
        [handleRateArticle],
    )

    if (isLoading) {
        return <Skeleton width='100%' height={120} />
    }

    const rating = data?.[0]

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={classNames('', {}, [className])}
            title={t('RATE_ARTICLE')}
            feedbackTitle={t('RATE_ARTICLE_MESSAGE')}
            hasFeedback
        />
    )
}

export default ArticleRating
