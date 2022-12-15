import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IComment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface commentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList: FC<commentListProps> = props => {
    const { className, isLoading = false, comments } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        )
    }

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment: IComment) => (
                    <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
                ))
            ) : (
                <Text text={t('COOMENT_ABSENT')} />
            )}
        </VStack>
    )
}
