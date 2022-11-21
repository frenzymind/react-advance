import { MutableRefObject, useCallback, useRef } from 'react'

export function useDebounce(cb: (...args: any[]) => void, delay: number) {
    const timerRef = useRef() as MutableRefObject<any>

    return useCallback(
        (...args) => {
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
