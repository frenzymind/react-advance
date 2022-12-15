import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleType } from '../../model/constants/consts'
import { TabItem, Tabs } from '@/shared/ui/Tabs'

interface articleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<articleTypeTabsProps> = props => {
    const { className, value, onChangeType } = props

    const { t } = useTranslation('article')

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('TABS_ALL'),
            },
            {
                value: ArticleType.IT,
                content: t('TABS_IT'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('TABS_SCIENCE'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('TABS_ECONOMICS'),
            },
        ],
        [t],
    )

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType)
        },
        [onChangeType],
    )

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    )
}
