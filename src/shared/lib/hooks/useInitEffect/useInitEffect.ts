import { useEffect } from 'react'

export function useInitEffect(cb: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            cb()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
