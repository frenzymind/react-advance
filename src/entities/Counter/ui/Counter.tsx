import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

import { Button } from '@/shared/ui/Button'

export const Counter: FC = () => {
    const counterValue = useCounterValue()
    const { t } = useTranslation()
    const { decrement, increment, add } = useCounterActions()

    const handleIncrement = () => {
        // dispatch(counterActions.increment())
        increment()
    }

    const handleDecrement = () => {
        // dispatch(counterActions.decrement())
        decrement()
    }

    const handleAddFive = () => {
        // dispatch(counterActions.add(5))
        add(5)
    }

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button data-testid='increment-btn' onClick={handleIncrement}>
                {t('COUNTER_INCREMENT')}
            </Button>
            <Button data-testid='decrement-btn' onClick={handleDecrement}>
                {t('COUNTER_DECREMENT')}
            </Button>
            <Button data-testid='decrement-btn-5' onClick={handleAddFive}>
                {t('COUNTER_ADD_5')}
            </Button>
        </div>
    )
}
