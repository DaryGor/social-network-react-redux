import './Posts.scss';
import Post from './Post'
import FormContainer from "./Form/FormContainer";

const Posts = (props) => {
    let postElements = props.posts.map((post, index) => <Post message={post.post} key={post.id}/>);

    return (
        <div className="posts">
            <h3>Мои записи</h3>
            <FormContainer/>
            <ul className="posts__list">
                { postElements }
            </ul>
        </div>
    );
}

export default Posts;