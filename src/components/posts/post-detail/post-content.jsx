import React from 'react';
import PostHeader from "@/components/posts/post-detail/post-header";
import s from './post-content.module.css';
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';


function PostContent(props) {
    const {post} = props;
    const imagePath = `/images/posts/${post.image}`;

    const customRenderers = {
        p(paragraph) {
            const {node} = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={s.image}>
                        <Image
                            src={`/images/posts/${post.image}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const {language, value} = code;
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    /* eslint-disable-next-line react/no-children-prop */
                    children={value}
                />
            );
        },
    }

    return (
        <article className={s.content}>
            <PostHeader title={post.title} image={imagePath} demo={post.demo}/>
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;



