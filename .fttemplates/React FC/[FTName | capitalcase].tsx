import { classNames } from 'shared/lib/classNames/classNames'
import cls from './<FTName | capitalcase>.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface <FTName | lowercase>Props {
 className?: string
}

export const <FTName | capitalcase>: FC<<FTName | lowercase>Props> = props => {
 const { className } = props

 const { t } = useTranslation()

return (
<div className={classNames(cls.<FTName | capitalcase>, {}, [className])}>

</div>
)
}