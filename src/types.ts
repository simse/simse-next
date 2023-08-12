interface Post {
    id: string;
    slug: string;
    title: string;
    styledTitle?: string;
    body: string;
    bodyBlockMap?: any;
    excerpt?: string;
    tags?: string[];
    status: 'published' | 'draft';
    publishedAt: Date;
    coverImage?: string;
}

export type {
    Post
}