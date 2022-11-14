import { classNames } from 'shared/lib/classNames/classNames'
import { FC, useCallback, useEffect } from 'react'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

interface ProfilePageProps {
    className?: string
}

const reducersList: ReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC<ProfilePageProps> = props => {
    const { className } = props
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readOnly = useSelector(getProfileReadonly)

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value }))
        },
        [dispatch],
    )

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value }))
        },
        [dispatch],
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value }))
        },
        [dispatch],
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        },
        [dispatch],
    )

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }))
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }))
        },
        [dispatch],
    )

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency: currency }))
        },
        [dispatch],
    )

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country: country }))
        },
        [dispatch],
    )

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readOnly={readOnly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
