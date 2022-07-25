import './Posts.scss';
import Photo from './../../general/PersonPhoto'

const Post = (props) => {
    return (
        <li className="post">
            <div className="post__photo">
                <Photo src={"https://avatars.mds.yandex.net/get-zen_doc/197911/pub_5abf43a52f578c01b35ad69b_5abf47f5f031731b9711ad29/scale_1200"}/>
            </div>
            <span className="post__text"> { props.message } </span>
        </li>
    );
}

export default Post;