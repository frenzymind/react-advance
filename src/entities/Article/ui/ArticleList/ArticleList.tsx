import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'

interface articleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton className={cls.card} view={view} key={index} />)
}

export const ArticleList: FC<articleListProps> = props => {
    const { className, articles, isLoading, view = ArticleView.SMALL } = props

    const { t } = useTranslation('article')

    const renderArticle = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view} />
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('NO_ARTICLES')} size={TextSize.L} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
}
