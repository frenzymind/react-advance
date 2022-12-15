import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/app/App'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { ThemeProvider } from '@/shared/providers/ThemeProvider'
import '@/app/styles/index.scss'
import '@/shared/config/i18n/i18n'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Root id container not found')
}

const root = createRoot(container)
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
)
