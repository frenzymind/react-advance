import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitEffect } from 'shared/lib/hooks/useInitEffect/useInitEffect'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

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
    const validateErrors = useSelector(getProfileValidateErrors)
    const { t } = useTranslation('profile')

    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),
        [ValidateProfileError.INCORRECT_AGE]: t('INCORRECT_AGE'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('INCORRECT_COUNTRY'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('INCORRECT_DATA'),
        [ValidateProfileError.NO_DATA]: t('NO_DATA'),
    }

    const { id } = useParams<{ id: string }>()

    useInitEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

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
            <Page className={classNames('', {}, [className])}>
                <VStack gap='16' max>
                    <ProfilePageHeader />
                    {validateErrors?.length &&
                        validateErrors.map(err => (
                            <Text
                                theme={TextTheme.ERROR}
                                text={validateErrorTranslate[err]}
                                key={err}
                            />
                        ))}
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
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
