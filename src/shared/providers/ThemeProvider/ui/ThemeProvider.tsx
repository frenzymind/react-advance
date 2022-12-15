import { FC, ReactNode, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProvider {
    initialTheme?: Theme
    children: ReactNode
}

const ThemeProvider: FC<ThemeProvider> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme,
        }
    }, [theme])

    document.body.className = theme

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
