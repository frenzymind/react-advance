import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema'
import { articleDetailsRecommendSchema } from './articleDetailsRecommendSchema'

export interface ArticlDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommend: articleDetailsRecommendSchema
}
