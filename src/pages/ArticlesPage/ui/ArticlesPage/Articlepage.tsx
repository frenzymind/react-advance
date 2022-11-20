import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitEffect } from 'shared/lib/hooks/useInitEffect/useInitEffect'
import { Page } from 'shared/ui/Page/Page'
import {
    getArticlePageIsLoading,
    getArticlePageNum,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from '../../model/slice/articlePageSlice'
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
    const page = useSelector(getArticlePageNum)
    const view = useSelector(getArticlePageView)

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitEffect(() => {
        dispatch(articlePageActions.initState())
        dispatch(fetchArticlesList({ page: page + 1 }))
    })

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch],
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.Articlepage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSelector onViewClick={onChangeView} view={view} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(Articlepage)
