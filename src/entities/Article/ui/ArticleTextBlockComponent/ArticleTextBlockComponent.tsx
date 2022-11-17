import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface articleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<articleTextBlockComponentProps> = props => {
    const { className, block } = props

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph, _) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    )
}
