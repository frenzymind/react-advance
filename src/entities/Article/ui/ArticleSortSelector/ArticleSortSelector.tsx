import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { SortOrder } from 'shared/types'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/constants/consts'
import cls from './ArticleSortSelector.module.scss'

interface articleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<articleSortSelectorProps> = props => {
    const { className, order, sort, onChangeOrder, onChangeSort } = props

    const { t } = useTranslation('article')

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('SORT_ORDER_ASC'),
            },
            {
                value: 'desc',
                content: t('SORT_ORDER_DESC'),
            },
        ],
        [t],
    )

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('SORT_CREATED_AT'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('SORT_TITLE'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('SORT_VIEWS'),
            },
        ],
        [t],
    )

    // BAD WAY. Look Select component generic props
    // const changeSortHandler = useCallback(
    //     (newSort: string) => {
    //         onChangeSort(newSort as ArticleSortField)
    //     },
    //     [onChangeSort],
    // )
    // BAD WAY. Look Select component generic props
    // const changeOrderHandler = useCallback(
    //     (newOrder: string) => {
    //         onChangeOrder(newOrder as SortOrder)
    //     },
    //     [onChangeOrder],
    // )

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('SORT_BY')}
                options={sortOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('ORDER_BY')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    )
}
