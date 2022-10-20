import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Тестовая задержка
      setTimeout(() => resolve(import('./AboutPage')), 1500)
    })
)
