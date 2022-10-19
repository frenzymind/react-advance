import { lazy } from 'react'

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Тестовая задержка
      setTimeout(() => resolve(import('./MainPage')), 1500)
    })
)
