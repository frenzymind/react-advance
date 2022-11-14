import { classNames } from 'shared/lib/classNames/classNames'
import { FC, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'
import { useTranslation } from 'react-i18next'

interface CountrySelectProps {
    className?: string
    value?: Country
    readOnly?: boolean
    onChange?: (value: Country) => void
}

const countryOptions = Object.entries(Country).map(val => ({ value: val[0], content: val[1] }))

export const CountrySelect: FC<CountrySelectProps> = props => {
    const { className, value, onChange, readOnly } = props
    const { t } = useTranslation()

    const onChnageHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange],
    )

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('COUNTRY_SELECT')}
            value={value}
            onChange={onChnageHandler}
            options={countryOptions}
            readOnly={readOnly}
        />
    )
}
