import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { FC, useCallback } from 'react'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'

interface codeProps {
    className?: string
    text: string
}

export const Code: FC<codeProps> = props => {
    const { className, text } = props

    const onCopy = useCallback(() => {
        console.log('copy')
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    )
}
