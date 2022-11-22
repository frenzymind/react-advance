import { combineReducers } from '@reduxjs/toolkit'
import { ArticlDetailsPageSchema } from '../types/index'
import { articleDetailsPageRecommendReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsPageRecommendSlice'
import { articlDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticlDetailsPageSchema>({
    recommend: articleDetailsPageRecommendReducer,
    comments: articlDetailsCommentsReducer,
})
