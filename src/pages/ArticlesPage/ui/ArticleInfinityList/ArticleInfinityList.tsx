import { ArticleList } from '@/entities/Article'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Text } from '@/shared/ui/Text'
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import { getArticles } from '../../model/slice/articlePageSlice'

interface articleInfinityListProps {
    className?: string
}

export const ArticleInfinityList: FC<articleInfinityListProps> = props => {
    const { className } = props

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    const error = useSelector(getArticlePageError)
    const { t } = useTranslation('article')

    if (error) {
        return <Text text={t('ARTICLE_LIST_LOAD_ERROR')} />
    }

    return (
        <ArticleList isLoading={isLoading} view={view} articles={articles} className={className} />
    )
}
