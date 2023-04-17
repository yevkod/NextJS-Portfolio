import React from 'react';
import Image from "next/image";
import s from './post-header.module.css';

const PostHeader = (props) => {
    const {title, image, demo} = props;

    return (
        <header className={s.header}>
            <h1>{title}</h1>
            <a href={demo} target='_blank'>
                Demo
            </a>
            <Image src={image} alt={title} width={400} height={200}/>
        </header>
    );
};

export default PostHeader;
