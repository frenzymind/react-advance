import { rtkApi } from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getArticlesRecommendationList: build.query({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticlesRecommendationList =
    recommendationsApi.useGetArticlesRecommendationListQuery
