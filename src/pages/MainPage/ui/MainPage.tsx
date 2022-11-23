import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'
import { Page } from 'widgets/Page/Page'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <Page>
            {t('MAIN_PAGE_CONTENT')}
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, minima.</div>
            <HStack>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti aspernatur
                    magnam, iste cum labore molestias!
                </div>
                <ListBox
                    defaultValue='Choose value'
                    onChange={(value: string) => {
                        console.log(value)
                    }}
                    value={undefined}
                    items={[
                        {
                            value: '1',
                            content: '1',
                        },
                        {
                            value: '2',
                            content: '2',
                            disabled: true,
                        },
                        {
                            value: '3',
                            content: '3',
                        },
                    ]}
                />
            </HStack>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, minima.</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, minima.</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, minima.</div>
        </Page>
    )
}

export default MainPage
