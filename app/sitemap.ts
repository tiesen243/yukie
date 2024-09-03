import type { MetadataRoute } from 'next'

import { getPosts } from '@/lib/actions'
import { getBaseUrl } from '@/lib/utils'

interface Route {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [''].map((route) => ({
    url: `${getBaseUrl()}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = await Promise.all(
    await getPosts().then((posts) =>
      posts.map(async (post) => ({
        url: `${getBaseUrl()}/blog/${post.slug.current}`,
        lastModified: new Date().toISOString(),
      })),
    ),
  )

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogRoutes])).flat()
  } catch (error) {
    if (error instanceof Error) throw new Error(`Failed to fetch routes: ${error.message}`)
  }
  return [...routesMap, ...fetchedRoutes]
}
