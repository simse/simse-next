"use client";
import { NotionRenderer } from "react-notion-x";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const SyntaxHighlighter = dynamic(() =>
  import('./SyntaxHighlighter')
)

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

export default function Notion({ blocks }: { blocks: any }) {
  return (
    <NotionRenderer
      recordMap={blocks}
      components={{
        nextImage: (props: any) => {
          return <Image
            src={props.src}
            alt={props.alt}
            width={800}
            height={600}
          />
        },
        nextLink: Link,
        Code: (props: any) => {
          const sourceCode = props.block.properties.title[0].toString()
          const language = props.block.properties.language[0][0]

          return <SyntaxHighlighter language={language}>{sourceCode}</SyntaxHighlighter>
        },
        Equation: Equation,


      }}
      /*mapImageUrl={(url, block) => {
        console.log(url)

        return url
      }}*/
      forceCustomImages={true}
      previewImages={true}
      hideBlockId={true}
      darkMode={true}
    />
  )
}