import Markdown from "@/components/Markdown";
import { getPosts, getPostBySlug } from "@/notion";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  return (
    <div className="max-w-5xl mx-auto py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-400">{post.publishedAt.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>

        <div className="flex items-center mt-4">
          {post.tags?.map((tag) => (
            <span key={`tag-${tag}`} className="text-sm text-blue-100 mr-2 bg-blue-500 rounded-full px-3 py-1">{tag}</span>
          ))}
        </div>
      </div>

      <hr className="my-16 border-zinc-700" />

      <Markdown markdown={post.body} />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const runtime = 'edge';