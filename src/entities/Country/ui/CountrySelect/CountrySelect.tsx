import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { Country } from '../../model/types/country'

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
        <ListBox
            className={className}
            value={value}
            defaultValue={t('COUNTRY_SELECT')}
            label={t('COUNTRY_SELECT')}
            items={countryOptions}
            onChange={onChnageHandler}
            readonly={readOnly}
            direction='top right'
        />
    )
}
