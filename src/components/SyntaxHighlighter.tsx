import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import go from 'highlight.js/lib/languages/go';
import cpp from 'highlight.js/lib/languages/cpp';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('go', go);
hljs.registerLanguage('cpp', cpp);

const NotionToHljs: {
    [key: string]: string
} = {
    'C++': 'cpp',
    'Go': 'go',
}

export default function SyntaxHighlighter({ children: code, language }: { children: string, language?: string }) {
    let highlightedCode = ''

    if (language && NotionToHljs[language]) {
        highlightedCode = hljs.highlight(code, {
            language: NotionToHljs[language]
        }).value
    } else {
        highlightedCode = hljs.highlightAuto(code).value
    }
    
    return <pre className='notion-code'><code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code></pre>
}