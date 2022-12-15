import type { FC } from 'react'

import { ArticleCodeBlock } from '../../model/types/article'

import cls from './ArticleCodeBlockComponent.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Code } from '@/shared/ui/Code'

interface articleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<articleCodeBlockComponentProps> = props => {
    const { className, block } = props

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    )
}
