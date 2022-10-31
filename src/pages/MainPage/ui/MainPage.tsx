import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    return <div>{t('MAIN_PAGE_CONTENT')}</div>
}

export default MainPage
