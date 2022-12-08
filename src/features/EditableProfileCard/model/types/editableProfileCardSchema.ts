import { Profile } from '@/entities/Profile'
import { ValidateProfileError } from '../constants/ValidateProfileError'

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateError?: ValidateProfileError[]
}
