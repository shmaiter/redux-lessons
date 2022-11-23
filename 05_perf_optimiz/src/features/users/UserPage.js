import { selectAllPosts } from "../posts/postsSlice";
import { selectUserById } from "./usersSlice";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams();
    const user = useSelector((state) => selectUserById(state, Number(userId)));
    const postsByUser = useSelector(selectAllPosts).filter((post) => post.userId === Number(userId));
    const postsTitles = postsByUser.map((post) => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ));

    return (
        <section>
            <h2>{user?.name}</h2>
            <ul>{postsTitles}</ul>
        </section>
    );
};

export default UserPage;
