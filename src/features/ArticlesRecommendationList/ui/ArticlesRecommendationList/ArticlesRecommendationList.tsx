import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { ArticleList } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { useArticlesRecommendationList } from '../../api/articlesRecommendationApi'

interface ArticlesRecommendationListProps {
    className?: string
}

const NoMemoArticlesRecommendationList = (props: ArticlesRecommendationListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { isLoading, data: articles, error } = useArticlesRecommendationList(3)

    if (isLoading || error) {
        return null
    }

    return (
        <VStack gap='8' className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('ARTICLES_RECOMMEND')} />
            <ArticleList articles={articles} target='_blank' />
        </VStack>
    )
}

export const ArticlesRecommendationList = memo(NoMemoArticlesRecommendationList)
