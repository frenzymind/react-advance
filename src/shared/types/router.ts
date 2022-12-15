import { RouteProps } from 'react-router-dom'

// TODO: Fix it
// eslint-disable-next-line test-fsd/layer-imports
import { UserRole } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}
