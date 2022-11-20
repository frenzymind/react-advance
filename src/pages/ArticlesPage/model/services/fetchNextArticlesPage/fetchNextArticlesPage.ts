import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlePageActions } from '../../../model/slice/articlePageSlice'
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum,
} from '../../../model/selectors/articlePageSelectors'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const hasMore = getArticlePageHasMore(getState())
        const page = getArticlePageNum(getState())
        const isLoading = getArticlePageIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1))
            dispatch(
                fetchArticlesList({
                    page: page + 1,
                }),
            )
        }
    },
)
