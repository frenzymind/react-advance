import { createAsyncThunk } from '@reduxjs/toolkit'

import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum,
} from '../../../model/selectors/articlePageSelectors'
import { articlePageActions } from '../../../model/slice/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import { ThunkConfig } from '@/app/providers/StoreProvider'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const hasMore = getArticlePageHasMore(getState())
        const page = getArticlePageNum(getState())
        const isLoading = getArticlePageIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1))
            dispatch(fetchArticlesList({}))
        }
    },
)
