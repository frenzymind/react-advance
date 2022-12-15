import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface BugButtonProps {
    className?: string
}

// For testing
export const BugButton: FC<BugButtonProps> = props => {
    const { className } = props

    const [error, setError] = useState(false)
    const { t } = useTranslation()

    const throwError = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={throwError} className={classNames('', {}, [className])}>
            {t('THROW_ERROR_BUTTON')}
        </Button>
    )
}
