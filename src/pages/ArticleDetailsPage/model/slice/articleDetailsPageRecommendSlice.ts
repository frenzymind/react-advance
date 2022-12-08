import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { Article } from '@/entities/Article'
import { fetchRecommendArticles } from '../../model/services/fetchRecommendArticles/FetchRecommendArticles'
import { articleDetailsRecommendSchema } from '../types/articleDetailsRecommendSchema'

const recommendAdapter = createEntityAdapter<Article>({
    // define id for normalization
    selectId: article => article.id,
})

export const getArticleRecommend = recommendAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.recommend || recommendAdapter.getInitialState(),
)

const articleDetailsPageRecommendSlice = createSlice({
    name: 'articleDetailsPageRecommendSlice',
    initialState: recommendAdapter.getInitialState<articleDetailsRecommendSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRecommendArticles.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchRecommendArticles.fulfilled, (state, action) => {
                state.isLoading = false
                recommendAdapter.setAll(state, action.payload)
            })
            .addCase(fetchRecommendArticles.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: articleDetailsPageRecommendReducer } = articleDetailsPageRecommendSlice
export const { actions: articleDetailsPageRecommendActions } = articleDetailsPageRecommendSlice
