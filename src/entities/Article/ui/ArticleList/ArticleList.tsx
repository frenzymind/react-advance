import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'

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

    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        )
    }

    const renderArticle = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view} />
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
        </div>
    )
}
