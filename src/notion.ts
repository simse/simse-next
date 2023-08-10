import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionToMarkdown } from 'notion-to-md';


import type { Post } from './types';


const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const getPosts = async (): Promise<Post[]> => {
    let posts: Post[] = []
    let query: QueryDatabaseResponse = await notion.databases.query({
        database_id: 'd8ec0ff32b004ce5b82b5dd6b7e37fec',
    })
    
    do {
        query.results.forEach((page) => {
            // @ts-ignore
            const properties = page.properties

            posts.push({
                id: page.id,
                title: properties.Page.title[0].plain_text,
                slug: properties.Slug.rich_text[0]?.plain_text || '',
                body: '',
                excerpt: properties.Excerpt.rich_text[0]?.plain_text || '',
                tags: properties.Tags.multi_select.map((tag: any) => tag?.name),
                status: properties.Status.select?.name.toLowerCase() || 'draft' as 'published' | 'draft',
                publishedAt: properties.Published?.date?.start,
            })


        })

        if (query.has_more) {
            query = await notion.databases.query({
                database_id: 'd8ec0ff32b004ce5b82b5dd6b7e37fec',
                start_cursor: query.next_cursor || undefined,
            })
        }
    } while (query.has_more)

    // console.log(posts)

    if (process.env.NODE_ENV === 'development') {
        return posts
    }

    return posts.filter((post) => post.status === 'published')
}

const getPost = async (id: string): Promise<Post> => {
    const page = await notion.pages.retrieve({ page_id: id })

    const n2m = new NotionToMarkdown({ notionClient: notion });
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);


    // @ts-ignore
    const properties = page.properties

    

    return {
        id: page.id,
        title: properties.Page.title[0].plain_text,
        slug: properties.Slug.rich_text[0]?.plain_text || '',
        body: mdString.parent,
        excerpt: properties.Excerpt.rich_text[0]?.plain_text || '',
        tags: properties.Tags.multi_select.map((tag: any) => tag?.name),
        status: properties.Status.select?.name.toLowerCase() || 'draft' as 'published' | 'draft',
        publishedAt: properties.Published?.date?.start,
    }
}

const getPostBySlug = async (slug: string): Promise<Post> => {
    const posts = await getPosts()
    // console.log(posts)
    const post = posts.find((post: any) => post.slug === slug)

    if (!post) {
        throw new Error(`Post with slug '${slug}' not found`)
    }

    return getPost(post.id)
}


export {
    notion,
    getPosts,
    getPost,
    getPostBySlug
}