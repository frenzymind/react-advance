import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleType } from 'entities/Article'
import { getArticlePageInited } from '../../selectors/articlePageSelectors'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList'
import { articlePageActions } from '../../../model/slice/articlePageSlice'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi

        const inited = getArticlePageInited(getState())

        if (!inited) {
            const sortFromUrl = searchParams.get('sort') as ArticleSortField
            const orderFromUrl = searchParams.get('order') as SortOrder
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as ArticleType

            if (orderFromUrl) {
                dispatch(articlePageActions.setOrder(orderFromUrl))
            }
            if (sortFromUrl) {
                dispatch(articlePageActions.setSort(sortFromUrl))
            }
            if (searchFromUrl) {
                dispatch(articlePageActions.setSearch(searchFromUrl))
            }
            if (typeFromUrl) {
                dispatch(articlePageActions.setType(typeFromUrl))
            }

            dispatch(articlePageActions.initState())
            dispatch(fetchArticlesList({}))
        }
    },
)
