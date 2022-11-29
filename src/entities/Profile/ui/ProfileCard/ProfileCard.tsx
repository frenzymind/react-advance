import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextAlighn, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import { HStack, VStack } from 'shared/ui/Stack'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readOnly?: boolean
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = props => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props
    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <HStack
                justify='center'
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack
                justify='center'
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('ERROR_TITLE')}
                    text={t('ERROR_TEXT')}
                    align={TextAlighn.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    }

    return (
        <VStack gap='16' max className={classNames(cls.ProfileCard, mods, [className])}>
            <HStack justify='center' max className={cls.avatarWrapper}>
                {data?.avatar && <Avatar src={data?.avatar} alt='avatar' />}
            </HStack>
            <Input
                className={cls.input}
                value={data?.first}
                placeholder={t('PROFILE_NAME')}
                onChange={onChangeFirstName}
                readOnly={readOnly}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('PROFILE_LASTNAME')}
                onChange={onChangeLastName}
                readOnly={readOnly}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                className={cls.input}
                value={data?.age}
                placeholder={t('PROFILE_AGE')}
                onChange={onChangeAge}
                readOnly={readOnly}
                type={'number'}
            />
            <Input
                className={cls.input}
                value={data?.city}
                placeholder={t('PROFILE_CITY')}
                onChange={onChangeCity}
                readOnly={readOnly}
            />
            <Input
                className={cls.input}
                value={data?.username}
                placeholder={t('PROFILE_USERNAME')}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                placeholder={t('PROFILE_AVATAR')}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readOnly={readOnly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readOnly={readOnly}
            />
        </VStack>
    )
}
