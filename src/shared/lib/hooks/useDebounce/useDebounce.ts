import { MutableRefObject, useCallback, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce(cb: (...args: any[]) => void, delay: number) {
    const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>

    return useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (...args: any) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }

            timerRef.current = setTimeout(() => {
                cb(...args)
            }, delay)
        },
        [cb, delay],
    )
}
