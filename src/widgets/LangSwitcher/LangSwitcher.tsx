import { classNames } from 'shared/lib/classNames/classNames'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
    const { className } = props

    const { t, i18n } = useTranslation()

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t('LANG_SWITCHER')}
        </Button>
    )
}
