import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readOnly?: boolean
}

export const Input = memo(function Input(props: InputProps) {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState(false)
    const [carretPosition, setCarrePosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null)

    const isCarretVisible = isFocused && !readOnly

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCarrePosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
        if (e.target instanceof HTMLInputElement) {
            setCarrePosition(e.target.selectionStart || 0)
        }
    }

    const mods: Mods = {
        [cls.readonly]: readOnly,
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    {...otherProps}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={cls.input}
                    onSelect={onSelect}
                    readOnly={readOnly}
                />
                {isCarretVisible && (
                    <span className={cls.caret} style={{ left: `${carretPosition * 9}px` }} />
                )}
            </div>
        </div>
    )
})
