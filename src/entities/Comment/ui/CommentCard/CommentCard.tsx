import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import type { FC } from 'react'
import { IComment } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Text } from '@/shared/ui/Text/Text'
import { Skeleton } from '@/shared/Skeleton/Skeleton'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/constants/router'
import { VStack } from '@/shared/ui/Stack'

interface commentCardProps {
    className?: string
    comment?: IComment
    isLoading: boolean
}

export const CommentCard: FC<commentCardProps> = props => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack
                gap='16'
                max
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack gap='8' max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}/${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    )
}
