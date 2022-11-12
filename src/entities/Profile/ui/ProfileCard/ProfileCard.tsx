import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = props => {
    const { className } = props
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    // const error = useSelector(getProfileError)
    // const isLoading = useSelector(getProfileIsLoading)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('PROFILE_PAGE_TEXT')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('EDIT_PROFILE')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.first} placeholder={t('PROFILE_NAME')} />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('PROFILE_LASTNAME')}
                />
            </div>
        </div>
    )
}
