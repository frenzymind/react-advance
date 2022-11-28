import { EditableProfileCard } from 'features/EditableProfileCard'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { Text } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = props => {
    const { className } = props
    const { t } = useTranslation('profile')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <Text text={t('NO_PROFILE')} />
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='16' max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
