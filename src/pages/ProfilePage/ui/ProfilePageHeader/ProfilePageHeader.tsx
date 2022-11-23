import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile'
import { getUserAuthData } from 'entities/User'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import { Text } from 'shared/ui/Text/Text'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = props => {
    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readOnly = useSelector(getProfileReadonly)
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onEditCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    const canEdit = authData?.id === profileData?.id

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('PROFILE_PAGE_TEXT')} />
            {canEdit && (
                <div>
                    {readOnly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('EDIT_PROFILE')}
                        </Button>
                    ) : (
                        <HStack gap='8'>
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onEditCancel}>
                                {t('CANCEL_EDIT_PROFILE')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                {t('SAVE_PROFILE')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    )
}
