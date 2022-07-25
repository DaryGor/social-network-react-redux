import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../state/posts-reducer";
import Form from "./Form";

let mapStateToProps = (state) => {
    return {
        newPostText: state.postsPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (text) => {
            const action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;