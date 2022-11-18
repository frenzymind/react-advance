import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import type { FC } from 'react'
import { IComment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface commentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList: FC<commentListProps> = props => {
    const { className, isLoading = false, comments } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment: IComment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        className={cls.comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('COOMENT_ABSENT')} />
            )}
        </div>
    )
}
