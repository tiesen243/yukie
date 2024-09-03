import type { Metadata } from 'next'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

import { getBaseUrl } from '@/lib/utils'

interface Params {
  title?: string
  description?: string
  url?: string
  images?: OpenGraph['images']
}

export const seo = (params: Params): Metadata => {
  const title = params.title ? `${params.title} | Yukie` : 'Yukie'
  const description =
    params.description ?? 'Blog của một lập trình viên yêu thích anime, manga và light novel.'
  const url = params.url ? `${getBaseUrl()}/${params.url}` : getBaseUrl()
  const images = params.images ?? ['/api/og']

  return {
    metadataBase: new URL(getBaseUrl()),
    title,
    description,
    applicationName: 'Yukie',
    alternates: { canonical: url },
    openGraph: { url, images, type: 'article' },
    twitter: { card: 'summary_large_image', creator: '@tiesen243' },
    keywords: ['tiesen', 'tiesen243', 'tiesen 243', 'Trần Tiến', 'Tran Tien', 'portfolio', 'blog'],
    icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  }
}
