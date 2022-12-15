import { createSelector } from '@reduxjs/toolkit'

import { SidebarItemType } from '../types/Sidebar'

import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import { RoutePath } from '@/shared/constants/router'

export const getSidebarItems = createSelector(getUserAuthData, userData => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}/${userData?.id}`,
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            },
        )
    }

    return sidebarItemsList
})
