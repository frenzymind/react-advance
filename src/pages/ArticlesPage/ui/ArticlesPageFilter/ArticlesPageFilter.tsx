import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPageFilter.module.scss'
import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import { Select } from 'shared/ui/Select/Select'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { ArticleType } from 'entities/Article/model/types/article'

interface articlesPageFilterProps {
    className?: string
}

export const ArticlesPageFilter: FC<articlesPageFilterProps> = props => {
    const { className } = props

    const { t } = useTranslation('article')
    const view = useSelector(getArticlePageView)
    const sort = useSelector(getArticlePageSort)
    const order = useSelector(getArticlePageOrder)
    const search = useSelector(getArticlePageSearch)
    const type = useSelector(getArticlePageType)
    const dispatch = useAppDispatch()

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch],
    )

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(sort))
            dispatch(articlePageActions.setPage(1))
            debounceFetchData()
        },
        [dispatch, debounceFetchData],
    )

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlePageActions.setOrder(order))
            dispatch(articlePageActions.setPage(1))
            debounceFetchData()
        },
        [dispatch, debounceFetchData],
    )

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search))
            dispatch(articlePageActions.setPage(1))
            debounceFetchData()
        },
        [dispatch, debounceFetchData],
    )

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value))
            dispatch(articlePageActions.setPage(1))
            debounceFetchData()
        },
        [dispatch, debounceFetchData],
    )

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector onViewClick={onChangeView} view={view} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('SEARCH_PLACEHOLDER')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs onChangeType={onChangeType} value={type} className={cls.tabs} />
        </div>
    )
}
