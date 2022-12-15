import { combineReducers } from '@reduxjs/toolkit'

import { ArticlDetailsPageSchema } from '../types/index'

import { articlDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsPageRecommendReducer } from './articleDetailsPageRecommendSlice'

export const articleDetailsPageReducer = combineReducers<ArticlDetailsPageSchema>({
    recommend: articleDetailsPageRecommendReducer,
    comments: articlDetailsCommentsReducer,
})
