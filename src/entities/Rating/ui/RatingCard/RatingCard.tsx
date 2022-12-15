import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer'

interface ratingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard: FC<ratingCardProps> = props => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props

    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)

            if (hasFeedback) {
                setIsModalOpen(true)
            } else {
                onAccept?.(selectedStarsCount)
            }
        },
        [hasFeedback, onAccept],
    )

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <VStack max gap='32'>
            <Text title={feedbackTitle} />
            <Input placeholder={t('YOUR_FEEDBACK')} value={feedback} onChange={setFeedback} />
            <HStack max gap='16' justify='end'>
                <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                    {t('FEEDBACK_CLOSE')}
                </Button>
                <Button onClick={acceptHandler}>{t('FEEDBACK_SEND')}</Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={classNames('', {}, [className])} max>
            <VStack align='center' gap='8' max>
                <Text title={starsCount ? t('RATING_THANKS') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    )
}
