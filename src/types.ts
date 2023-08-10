interface Post {
    id: string;
    slug: string;
    title: string;
    body: string;
    excerpt?: string;
    tags?: string[];
    status: 'published' | 'draft';
    publishedAt: Date;
}

export type {
    Post
}