import React from 'react';
import Link from "next/link";
import Image from "next/image";
import s from './post-item.module.css';

const PostItem = (props) => {
    const {title, image, excerpt, slug} = props.post;


    const imagePath = `/images/posts/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={s.post}>
            <Link href={linkPath} legacyBehavior>
                <a>
                    <div className={s.image}>
                        <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
                    </div>
                    <div className={s.content}>
                        <h3>{title}</h3>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
