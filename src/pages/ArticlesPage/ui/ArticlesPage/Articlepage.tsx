import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Articlepage.module.scss'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

interface articlepageProps {
    className?: string
}
const Articlepage: FC<articlepageProps> = props => {
    const { className } = props

    const { t } = useTranslation('article')

    return <div className={classNames(cls.Articlepage, {}, [className])}>ARTICLES PAGE</div>
}

export default memo(Articlepage)
