import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useArticlesRecommendationList } from '../../api/articlesRecommendationApi'

import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'

interface ArticlesRecommendationListProps {
    className?: string
}

const NoMemoArticlesRecommendationList = (props: ArticlesRecommendationListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { isLoading, data: articles, error } = useArticlesRecommendationList(3)

    if (isLoading || error || !articles) {
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
