import { classNames } from 'shared/lib/classNames/classNames'
import type { FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = props => {
    const { className, isOpen, onClose } = props

    return (
        <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
            <LoginForm />
        </Modal>
    )
}
