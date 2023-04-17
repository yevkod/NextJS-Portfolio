import s from './posts.grid.module.css';
import PostItem from "@/components/posts/post-item";

const PostGrid = (props) => {
    const {posts} = props;

    return (
        <ul className={s.grid}>
            {posts.map((post) => (
                <PostItem key={post.slug} post={post}/>
            ))}
        </ul>
    );
};

export default PostGrid;
