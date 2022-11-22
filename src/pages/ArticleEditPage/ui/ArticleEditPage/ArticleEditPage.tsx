import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'
import { useParams } from 'react-router-dom'

interface articleEditPageProps {
    className?: string
}

const ArticleEditPage: FC<articleEditPageProps> = props => {
    const { className } = props

    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? `ARTICLE EDIT PAGE ID=${id}` : 'ARTICLE NEW PAGE'}
        </Page>
    )
}

export default ArticleEditPage
