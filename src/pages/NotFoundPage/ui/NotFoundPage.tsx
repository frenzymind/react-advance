import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = props => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>{t('PAGE_NOT_FOUND')}</div>
    )
}
