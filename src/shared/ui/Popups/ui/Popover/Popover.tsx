import { ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import cls from './Popover.module.scss'
import { Popover as HPopover } from '@headlessui/react'

interface popoverProps {
    className?: string
    direction?: DropdownDirection
    trigger: ReactNode
    children: ReactNode
}

export function Popover(props: popoverProps) {
    const { className, direction = 'bottom right', trigger, children } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
