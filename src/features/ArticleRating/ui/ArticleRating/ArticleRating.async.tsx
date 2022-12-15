/* eslint-disable react/jsx-props-no-spreading */
import { FC, lazy, Suspense } from 'react'

import { articleRatingProps } from './ArticleRating'

import { Skeleton } from '@/shared/Skeleton/Skeleton'

const ArticleRatingLazy = lazy<FC<articleRatingProps>>(() => import('./ArticleRating'))

export const ArticleRatingAsync = (props: articleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    )
}
