import s from './all-posts.module.css';
import PostsGrid from "@/components/posts/posts-grid";

const AllPosts = (props) => {
    return (
        <section className={s.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts}/>
        </section>
    );
};

export default AllPosts;
