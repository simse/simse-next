import "./styles.scss";
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github-dark.css';
import { national2Font, feijoaFont } from "@/fonts";
import { getPosts, getPostBySlug } from "@/notion";
import Notion from "@/components/Notion";
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <div>
      <div className="h-[600px] max-w-[2600px] mx-auto relative block">
        {post.coverImage && <Image
          src={post.coverImage}
          alt="Cover image"
          fill
          priority
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />}
      </div>

      <div className="max-w-3xl mx-auto py-16" style={national2Font.style}>
        <div className="mb-8">
          <div className="flex items-center mb-4 gap-2">
            {post.tags?.map((tag) => (
              <span key={`tag-${tag}`} className="text-sm text-zinc-100 bg-zinc-800 border-zinc-700 hover:bg-blue-800 hover:border-blue-500 hover:text-blue-100 transition-colors border rounded-full px-3 py-1">{tag}</span>
            ))}
          </div>

          <h1 className={`text-4xl leading-normal mb-2 ${feijoaFont.className}`}><span dangerouslySetInnerHTML={{ __html: post.styledTitle || post.title }}></span></h1>
          <p className="text-zinc-400 text-xl">Published on <span className="text-zinc-200">{post.publishedAt.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span></p>

        </div>

        <Notion blocks={post.bodyBlockMap} />
      </div>
    </div>
  )
}

async function getPost(slug: string) {
  const post = await getPostBySlug(slug)

  // console.log(post)

  return post
}

export async function generateStaticParams() {
  const posts = await getPosts()

  //await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
