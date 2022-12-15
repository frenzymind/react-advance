import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, memo } from 'react'
import { Theme, useTheme } from '@/shared/providers/ThemeProvider'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
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
