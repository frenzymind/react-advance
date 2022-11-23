import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page/Page'
import cls from './ArticleEditPage.module.scss'

interface articleEditPageProps {
    className?: string
}

const ArticleEditPage: FC<articleEditPageProps> = props => {
    const { className } = props

    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? `ARTICLE EDIT PAGE ID=${id}` : 'ARTICLE NEW PAGE'}
        </Page>
    )
}

export default ArticleEditPage
