import { combineReducers } from '@reduxjs/toolkit'
import { ArticlDetailsPageSchema } from '../types/index'
import { articleDetailsPageRecommendReducer } from './articleDetailsPageRecommendSlice'
import { articlDetailsCommentsReducer } from './articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticlDetailsPageSchema>({
    recommend: articleDetailsPageRecommendReducer,
    comments: articlDetailsCommentsReducer,
})
