import { FileTextIcon } from 'lucide-react'
import type { PortableTextProps } from 'next-sanity'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: FileTextIcon,
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'author', type: 'reference', to: { type: 'author' } }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alternative text' }],
    }),
    defineField({ name: 'description', type: 'text' }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({
      name: 'body',
      type: 'markdown',
    }),
  ],
})

export interface Post {
  _id: string
  _type: 'post'
  title: string
  publishedAt: string
  description: string
  categories: { _id: string; _ref: string; _type: 'reference'; title: string }[]
  slug: { current: string; _type: 'slug' }
  mainImage: { _type: 'image'; asset: { _ref: string; _type: 'reference' }; alt: string }
  content: PortableTextProps['value']
  body: string
  author: {
    _id: string
    _ref: string
    _type: 'reference'
    name: string
    image: { _type: 'image'; asset: { _ref: string; _type: 'reference' } }
  }
  _createdAt: string
}
