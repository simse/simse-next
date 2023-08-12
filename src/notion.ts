import { Client } from '@notionhq/client';
import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionAPI } from 'notion-client';

import type { Post } from './types';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

type NotionRichTextObject = {
    type: string,
    text: {
        content: string,
        link: any,
    },
    annotations: {
        bold: boolean,
        italic: boolean,
        strikethrough: boolean,
        underline: boolean,
        code: boolean,
        color: string,
    },
    plain_text: string,
    href: any,
};

const convertToHTML = (arr: NotionRichTextObject[]): string => {
    let htmlString = '';

    for (const item of arr) {
        let content = item.text.content;

        if (item.annotations.bold) {
            content = `<strong>${content}</strong>`;
        }

        if (item.annotations.italic) {
            content = `<em class="font-medium text-[40px]">${content}</em>`;
        }

        if (item.annotations.strikethrough) {
            content = `<s>${content}</s>`;
        }

        if (item.annotations.underline) {
            content = `<u class="decoration-1 underline-offset-4">${content}</u>`;
        }

        if (item.annotations.code) {
            content = `<code>${content}</code>`;
        }

        htmlString += content;
    }

    return htmlString;
}

const getPosts = async (): Promise<Post[]> => {
    let posts: Post[] = []
    let query: QueryDatabaseResponse = await notion.databases.query({
        database_id: 'd8ec0ff32b004ce5b82b5dd6b7e37fec',
    })

    do {
        query.results.forEach((result) => {
            if (result.object !== 'page') {
                return;
            }

            const page = result as PageObjectResponse;

            // @ts-ignore
            const properties = page.properties

            let styledTitle = undefined;
            if (properties['Styled Title']) {
                // @ts-ignore
                styledTitle = convertToHTML(properties['Styled Title'].rich_text);
            }

            let cover = undefined
            if (page.cover) {
                if (page.cover.type === 'external') {
                    cover = page.cover.external.url
                }
                if (page.cover.type === 'file') {
                    cover = page.cover.file.url
                }
            }

            posts.push({
                id: page.id,
                // @ts-ignore
                title: properties.Page.title[0].plain_text,
                styledTitle: styledTitle,
                // @ts-ignore
                slug: properties.Slug.rich_text[0]?.plain_text || '',
                body: '',
                // @ts-ignore
                excerpt: properties.Excerpt.rich_text[0]?.plain_text || '',
                // @ts-ignore
                tags: properties.Tags.multi_select.map((tag: any) => tag?.name),
                // @ts-ignore
                status: properties.Status.select?.name.toLowerCase() || 'draft' as 'published' | 'draft',
                // @ts-ignore
                publishedAt: new Date(properties.Published?.date?.start),
                coverImage: cover,
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

const getPostBySlug = async (slug: string): Promise<Post> => {
    const posts = await getPosts()
    // console.log(posts)
    const post = posts.find((post: any) => post.slug === slug)

    if (!post) {
        throw new Error(`Post with slug '${slug}' not found`)
    }


    const notion = new NotionAPI()

    const recordMap = await notion.getPage(post.id)


    post.bodyBlockMap = recordMap

    return post
}


export {
    notion,
    getPosts,
    getPostBySlug
}