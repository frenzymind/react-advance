import App from '@/app/App'
import { ThemeProvider } from '@/shared/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import '@/app/styles/index.scss'
import '@/shared/config/i18n/i18n'
import { ErrorBoundary } from '@/shared/hoc/ErrorBoundary'
import { StoreProvider } from '@/app/providers/StoreProvider'

import { createRoot } from 'react-dom/client'
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
