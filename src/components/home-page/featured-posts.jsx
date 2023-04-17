import s from './featured-posts.module.css';
import PostsGrid from "@/components/posts/posts-grid";

const FeaturedPosts = (props) => {
    return (
        <section className={s.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts}/>
        </section>
    );
};

export default FeaturedPosts;
