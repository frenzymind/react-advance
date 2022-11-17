import { classNames } from 'shared/lib/classNames/classNames'
import cls from './<FTName | capitalize>.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface <FTName | lowercasefirstchar>Props {
 className?: string
}

export const <FTName | capitalize>: FC<<FTName | lowercasefirstchar>Props> = props => {
 const { className } = props

 const { t } = useTranslation()

return (
<div className={classNames(cls.<FTName | capitalize>, {}, [className])}>

</div>
)
}