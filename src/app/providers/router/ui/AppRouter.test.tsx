import { screen } from '@testing-library/react'

import { AppRouter } from './/AppRouter'

import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/constants/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('app/router/AppRouter', () => {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        })

        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/focus-pocus',
        })

        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })

    test('Redirect not authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        })

        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })

    test('Access to private page for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {},
                },
            },
        })

        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })

    test('Forbidden page for not acceptable role', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {},
                },
            },
        })

        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })

    test('Forbidden page for not acceptable role', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { roles: [UserRole.ADMIN] },
                },
            },
        })

        const page = await screen.findByTestId('AdminPanelPage')
        expect(page).toBeInTheDocument()
    })
})
