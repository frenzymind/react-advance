import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './PageError.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = props => {
    const { className } = props

    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('UNEXPECTED_ERROR')}</p>
            <Button onClick={reloadPage}>{t('RELOAD_PAGE_BUTTON')}</Button>
        </div>
    )
}
