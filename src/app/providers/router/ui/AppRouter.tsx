import { getUserAuthData } from 'entities/User'
import { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false
            }

            return true
        })
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routes).map(({ path, element }) => (
                    <Route
                        key={path}
                        element={<div className='page-wrapper'>{element}</div>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
