import { ArticleList } from 'entities/Article'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitEffect } from 'shared/lib/hooks/useInitEffect/useInitEffect'
import { Page } from 'widgets/Page/Page'
import {
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlePageReducer, getArticles } from '../../model/slice/articlePageSlice'
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter'
import cls from './Articlepage.module.scss'

interface articlepageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
}

const Articlepage: FC<articlepageProps> = props => {
    const { className } = props

    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    const [searchParams] = useSearchParams()

    console.log(searchParams)

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.Articlepage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilter />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(Articlepage)
