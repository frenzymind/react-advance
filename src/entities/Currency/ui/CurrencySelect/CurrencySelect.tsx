import { classNames } from 'shared/lib/classNames/classNames'
import { FC, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'
import { useTranslation } from 'react-i18next'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    readOnly?: boolean
    onChange?: (value: Currency) => void
}

const currencyOptions = Object.entries(Currency).map(val => ({ value: val[0], content: val[1] }))

export const CurrencySelect: FC<CurrencySelectProps> = props => {
    const { className, value, onChange, readOnly } = props
    const { t } = useTranslation()

    // const currencyOptions = useMemo(
    //     () => Object.entries(Currency).map(val => ({ value: val[0], content: val[1] })),
    //     [],
    // )

    const onChnageHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange],
    )

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('CURRENCY_SELECT')}
            value={value}
            onChange={onChnageHandler}
            options={currencyOptions}
            readOnly={readOnly}
        />
    )
}
