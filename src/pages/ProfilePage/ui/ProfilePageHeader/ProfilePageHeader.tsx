import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { FC, useCallback } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = props => {
    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readOnly = useSelector(getProfileReadonly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onEditCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('PROFILE_PAGE_TEXT')} />
            {readOnly ? (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                    {t('EDIT_PROFILE')}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onEditCancel}
                    >
                        {t('CANCEL_EDIT_PROFILE')}
                    </Button>
                    <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                        {t('SAVE_PROFILE')}
                    </Button>
                </>
            )}
        </div>
    )
}
