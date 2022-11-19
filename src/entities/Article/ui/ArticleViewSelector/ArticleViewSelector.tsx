import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleView } from '../../model/types/article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface articleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (articleView: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
]

export const ArticleViewSelector: FC<articleViewSelectorProps> = props => {
    const { className, view, onViewClick } = props

    const { t } = useTranslation()

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    )
}
