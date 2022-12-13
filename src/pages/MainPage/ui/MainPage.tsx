import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <Page>
            {t('MAIN_PAGE_CONTENT')}
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fugiat. Cumque,
                voluptatum provident est sit odio temporibus reiciendis facere saepe natus, ipsa
                tempora eveniet. Omnis quia laborum magnam nostrum id dolorum, optio ipsum, tempore
                odit provident quas laudantium quod numquam.
            </div>
        </Page>
    )
}

export default MainPage
