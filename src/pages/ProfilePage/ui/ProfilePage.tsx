import { classNames } from 'shared/lib/classNames/classNames'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

interface ProfilePageProps {
    className?: string
}

const reducersList: ReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = props => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>{t('PROFILE_PAGE')}</div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
