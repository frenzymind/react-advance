import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

const AdminPanelPage = () => {
    const { t } = useTranslation()

    return <Page data-testid='AdminPanelPage'>{t('ADMIN_PAGE')}</Page>
}

export default AdminPanelPage
