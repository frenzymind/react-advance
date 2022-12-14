import { FC, ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react'

interface appImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactElement
    errorFallback?: ReactElement
}

export const AppImage: FC<appImageProps> = props => {
    const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () => {
            setIsLoading(false)
        }
        img.onerror = () => {
            setIsLoading(false)
            setHasError(true)
        }
    }, [src])

    if (isLoading && fallback) {
        return fallback
    }

    if (hasError && errorFallback) {
        return errorFallback
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <img className={className} {...otherProps} src={src} alt={alt}></img>
}
