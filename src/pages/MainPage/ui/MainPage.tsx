import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui/Page/Page'

const MainPage = () => {
    const { t } = useTranslation()

    return <Page>{t('MAIN_PAGE_CONTENT')}</Page>
}

export default MainPage
