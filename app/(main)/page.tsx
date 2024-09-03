import type { NextPage } from 'next'

import { PostCard } from '@/components/post-card'
import { getPosts } from '@/lib/actions'

const Page: NextPage = async () => {
  const posts = await getPosts()

  return (
    <main className="container grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </main>
  )
}

export default Page
