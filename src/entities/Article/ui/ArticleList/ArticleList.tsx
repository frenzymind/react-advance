import type { FC, HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleView } from '../../model/constants/consts'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

import cls from './ArticleList.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text'

interface articleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton className={cls.card} view={view} key={index} />)
}

export const ArticleList: FC<articleListProps> = props => {
    const { className, articles, isLoading, target, view = ArticleView.SMALL } = props

    const { t } = useTranslation('article')

    // const isBig = view === ArticleView.BIG
    // const itemsPerRow = isBig ? 1 : 3
    // const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)

    const renderArticle = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view} target={target} />
    }

    // const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
    //     const items = []
    //     const fromIndex = index * itemsPerRow
    //     const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    //     for (let i = fromIndex; i < toIndex; i += 1) {
    //         items.push(
    //             <ArticleListItem
    //                 article={articles[i]}
    //                 view={view}
    //                 target={target}
    //                 key={`str${i}`}
    //                 className={cls.card}
    //             />,
    //         )
    //     }

    //     return (
    //         <div key={key} style={style} className={cls.row}>
    //             {items}
    //         </div>
    //         // <div key={key} style={style}>
    //         //     <ArticleListItem article={articles[index]} view={view} target={target} />
    //         // </div>
    //     )
    // }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('NO_ARTICLES')} size={TextSize.L} />
            </div>
        )
    }

    return (
        // <WindowScroller
        //     onScroll={() => console.log('scrolling')}
        //     scrollElement={document.getElementById(PAGE_ID) as Element}
        // >
        //     {({ height, width, registerChild, scrollTop, onChildScroll }) => {
        //         console.log(height, width)

        //         if (!height || !width) {
        //             return null
        //         }

        //         return (
        //             <div
        //                 ref={registerChild}
        //                 className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        //             >
        //                 <List
        //                     height={height ?? 700}
        //                     rowCount={rowCount}
        //                     rowHeight={isBig ? 700 : 330}
        //                     rowRenderer={rowRender}
        //                     width={1000}
        //                     autoHeight
        //                     onScroll={onChildScroll}
        //                     scrollTop={scrollTop}
        //                 />
        //                 {isLoading && getSkeletons(view)}
        //             </div>
        //         )
        //     }}
        // </WindowScroller>

        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
}
