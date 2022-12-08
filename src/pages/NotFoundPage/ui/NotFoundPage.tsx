import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = props => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>{t('PAGE_NOT_FOUND')}</Page>
    )
}
