import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { RatingCard } from '@/entities/Rating'

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
            <RatingCard title='Как вам статья?' feedbackTitle='Оставьте отзыв' hasFeedback />
        </Page>
    )
}

export default MainPage
