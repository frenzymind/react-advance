import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Currency } from '../../model/types/currency'

import { ListBox } from '@/shared/ui/Popups'

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
        <ListBox
            className={className}
            value={value}
            defaultValue={t('CURRENCY_SELECT')}
            label={t('COUNTRY_SELECT')}
            items={currencyOptions}
            onChange={onChnageHandler}
            readonly={readOnly}
            direction='top right'
        />
    )

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('CURRENCY_SELECT')}
    //         value={value}
    //         onChange={onChnageHandler}
    //         options={currencyOptions}
    //         readOnly={readOnly}
    //     />
    // )
}
