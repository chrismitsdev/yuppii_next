import * as React from 'react'
import {Metadata} from 'next'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {Container} from '@/src/components/container'
import {MenuCategories} from './(components)/menu-categories'

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata.Pages'})

  return {
    title: `${t('Menu')} • Yuppii Luna Park`
  }
}

export default function MenuPage({params}: Params) {
  const {locale} = React.use(params)
  setRequestLocale(locale)

  return (
    <Container>
      <MenuCategories />
    </Container>
  )
}
