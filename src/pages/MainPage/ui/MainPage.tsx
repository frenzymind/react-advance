import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('Главная страница')}
      {t('сахар')}
      {t('asdasdasdsd')}
    </div>
  )
}

export default MainPage
