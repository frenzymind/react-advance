import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleRecommendIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommend?.isLoading || false

export const getArticleRecommendError = (state: StateSchema) =>
    state.articleDetailsPage?.recommend?.error || undefined
