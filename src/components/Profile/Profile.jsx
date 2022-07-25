import './Profile.sass'
import Person from './Person/Person'
import Posts from './Posts/Posts'

const Profile = (props) => {
    return (
        <div className="main-content">
            <Person />
            <Posts posts={props.postsPage.posts}/>
        </div>

    );
}

export default Profile;