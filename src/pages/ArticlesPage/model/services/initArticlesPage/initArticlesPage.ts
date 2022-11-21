import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlePageInited } from 'pages/ArticlesPage/model/selectors/articlePageSelectors'
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList'
import { articlePageActions } from '../../../model/slice/articlePageSlice'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi

        const inited = getArticlePageInited(getState())

        if (!inited) {
            dispatch(articlePageActions.initState())
            dispatch(fetchArticlesList({ page: 1 }))
        }
    },
)
