import { classNames } from 'shared/lib/classNames/classNames'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
    const { className, short } = props

    const { t, i18n } = useTranslation()

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            {t(short ? 'LANG_SHORT' : 'LANG_SWITCHER')}
        </Button>
    )
}
