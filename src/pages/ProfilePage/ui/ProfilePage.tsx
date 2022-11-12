import { classNames } from 'shared/lib/classNames/classNames'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageProps {
    className?: string
}

const reducersList: ReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = props => {
    const { className } = props
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
