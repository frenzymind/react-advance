import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getProfileData } from '../..//model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../..//model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../..//model/services/updateProfileData/updateProfileData'
import { profileActions } from '../..//model/slice/profileSlice'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface ProfilePageHeaderProps {
    className?: string
}

const NoMemoProfilePageHeader: FC<ProfilePageHeaderProps> = props => {
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
        console.log('onSave')
        dispatch(updateProfileData())
    }, [dispatch])

    const canEdit = authData?.id === profileData?.id

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('PROFILE_PAGE_TEXT')} />
            {canEdit && (
                <div>
                    {readOnly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                        >
                            {t('EDIT_PROFILE')}
                        </Button>
                    ) : (
                        <HStack gap='8'>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onEditCancel}
                                data-testid={'EditableProfileCardHeader.CancelButton'}
                            >
                                {t('CANCEL_EDIT_PROFILE')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid={'EditableProfileCardHeader.SaveButton'}
                            >
                                {t('SAVE_PROFILE')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    )
}

export const ProfilePageHeader = memo(NoMemoProfilePageHeader)
