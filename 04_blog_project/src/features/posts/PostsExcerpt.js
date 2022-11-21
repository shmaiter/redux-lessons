import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
    return (
        <article className="listPost">
            <Link to={`post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="excerpt">{post.body.substring(0, 75)}...</p>
            </Link>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
};
export default PostsExcerpt;
