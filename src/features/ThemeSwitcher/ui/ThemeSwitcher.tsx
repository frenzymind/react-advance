import { FC, memo } from 'react'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Theme, useTheme } from '@/shared/providers/ThemeProvider'
import { Button } from '@/shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

const NoMemoThemeSwitcher: FC<ThemeSwitcherProps> = props => {
    const { className } = props

    const { theme, toggleTheme } = useTheme()

    return (
        <Button className={classNames('', {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}

export const ThemeSwitcher = memo(NoMemoThemeSwitcher)
