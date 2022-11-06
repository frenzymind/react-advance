import { counterActions } from '../model/slice/counterSlice'
import type { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter: FC = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button data-testid='increment-btn' onClick={increment}>
                {t('COUNTER_INCREMENT')}
            </Button>
            <Button data-testid='decrement-btn' onClick={decrement}>
                {t('COUNTER_DECREMENT')}
            </Button>
        </div>
    )
}
