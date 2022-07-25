import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../state/messages-reducer";
import DialogForm from "./DialogForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMassageText: state.messagesPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            const action = updateNewMessageActionCreator(text);
            dispatch(action);
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogFormContainer = connect(mapStateToProps, mapDispatchToProps)(DialogForm);

export default DialogFormContainer;