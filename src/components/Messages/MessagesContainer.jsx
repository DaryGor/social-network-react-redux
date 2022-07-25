import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;