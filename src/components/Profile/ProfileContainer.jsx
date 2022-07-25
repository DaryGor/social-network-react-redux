import Profile from "./Profile";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage,
    }
}

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;