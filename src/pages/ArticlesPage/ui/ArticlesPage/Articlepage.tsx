import { FC, memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitEffect } from 'shared/lib/hooks/useInitEffect/useInitEffect'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlePageReducer } from '../../model/slice/articlePageSlice'
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList'
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter'
import cls from './Articlepage.module.scss'

interface articlepageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
}

const Articlepage: FC<articlepageProps> = props => {
    const { className } = props
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    useInitEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.Articlepage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilter />
                <ArticleInfinityList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(Articlepage)
