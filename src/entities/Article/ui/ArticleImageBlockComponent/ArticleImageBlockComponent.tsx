import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import type { FC } from 'react'
import { ArticleImageBlock } from '../../model/types/article'
import { Text, TextAlighn } from 'shared/ui/Text/Text'

interface articleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<articleImageBlockComponentProps> = props => {
    const { className, block } = props

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && <Text text={block.title} align={TextAlighn.CENTER} />}
        </div>
    )
}
