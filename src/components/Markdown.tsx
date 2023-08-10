'use client';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark as highlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Markdown({ markdown }: { markdown: string }) {

    return (
        <ReactMarkdown
            className="prose prose-invert text-lg leading-8"
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
                            style={highlighterStyle}
                            language={match[1]}
                            PreTag="div"
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                    )
                },
                'h1': 'h2',
                'h2': 'h3',
                'h3': 'h4',
                'h4': 'h5',
                'h5': 'h6',
            }}
        >
            {markdown}
        </ReactMarkdown>
    )
}