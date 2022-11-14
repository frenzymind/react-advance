import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, FC, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    readOnly?: boolean
    onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = props => {
    const { className, label, options, value, readOnly, onChange } = props

    const mods: Mods = {}

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
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
