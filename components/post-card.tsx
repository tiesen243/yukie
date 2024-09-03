import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import type { Post } from '@/lib/actions'

export const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <Link
    href={`/blog/${post.slug.current}`}
    className="rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-secondary"
    passHref
  >
    <Image src={post.mainImage.src} alt={post.mainImage.alt} width={1200} height={630} />

    <div className="flex flex-col gap-2 p-6 pt-4">
      <div className="flex items-center gap-2 text-sm">
        <Image
          src={post.author.image}
          alt={post.author.name}
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="font-medium">{post.author.name}</span>
        <span className="text-muted-foreground">
          at {new Date(post.publishedAt).toDateString()}
        </span>
      </div>

      <h3 className="line-clamp-1 text-2xl font-semibold leading-none tracking-tight">
        {post.title}
      </h3>
      <p className="line-clamp-2 text-sm text-muted-foreground">{post.description}</p>
      <ul className="flex items-center gap-2">
        {post.categories.map((tag) => (
          <Badge key={tag._id}>{tag.title}</Badge>
        ))}
      </ul>
    </div>
  </Link>
)
