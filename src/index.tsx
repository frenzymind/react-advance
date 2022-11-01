import App from 'app/App'
import { ThemeProvider } from 'shared/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'shared/hoc/ErrorBoundary'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
)
