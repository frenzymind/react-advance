import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Articlepage.module.scss'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Article, ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitEffect } from 'shared/lib/hooks/useInitEffect/useInitEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
    getArticlePageIsLoading,
    getArticlePageError,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors'

interface articlepageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
}

const Articlepage: FC<articlepageProps> = props => {
    const { className } = props

    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const error = useSelector(getArticlePageError)
    const view = useSelector(getArticlePageView)

    useInitEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlePageActions.initState())
    })

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch],
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.Articlepage, {}, [className])}>
                <ArticleViewSelector onViewClick={onChangeView} view={view} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(Articlepage)
