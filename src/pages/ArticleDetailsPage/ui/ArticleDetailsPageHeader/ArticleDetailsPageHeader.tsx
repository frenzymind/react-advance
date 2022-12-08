import { getArticleDetailsData } from '@/entities/Article'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { HStack } from '@/shared/ui/Stack'
import { getCanEditArticle } from '../../model/selectors/article'

interface articleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader: FC<articleDetailsPageHeaderProps> = props => {
    const { className } = props

    const { t } = useTranslation('article')
    const navigate = useNavigate()
    const article = useSelector(getArticleDetailsData)

    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(RoutePath.articles + '/' + article?.id + '/edit')
    }, [article?.id, navigate])

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('BACK_TO_ARTICLES')}
            </Button>
            {canEdit && (
                <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle} className={''}>
                    {t('ARTICLE_EDIT')}
                </Button>
            )}
        </HStack>
    )
}
