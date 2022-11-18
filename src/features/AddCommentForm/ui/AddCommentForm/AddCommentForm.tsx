import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface addCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const AddCommentForm: FC<addCommentFormProps> = props => {
    const { className, onSendComment } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)

    const omCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value))
        },
        [dispatch],
    )

    const reducers: ReducersList = {
        addCommentForm: addCommentFormReducer,
    }

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        dispatch(addCommentFormActions.setText(''))
    }, [dispatch, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('ADD_COMMENT_TEXT_PLACEHOLDER')}
                    value={text}
                    onChange={omCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                    {t('ADD_COMMENT_SEND')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(AddCommentForm)
