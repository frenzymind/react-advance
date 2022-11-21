import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, FC, useMemo } from 'react'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    readOnly?: boolean
    onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, readOnly, onChange } = props

    const mods: Mods = {}

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    const optionList = useMemo(() => {
        return options?.map(opt => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        ))
    }, [options])

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionList}
            </select>
        </div>
    )
}
