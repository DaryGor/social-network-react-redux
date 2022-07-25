import './Messages.scss';
import Dialogs from './Dialogs/Dialogs';
import Contacts from './Contacts/Contacts'

const Messages = (props) => {
    return (
        <div className="messages">
            <Contacts contacts={props.messagesPage.contacts}/>
            <Dialogs messages={props.messagesPage.messages}/>
        </div>
    )
}

export default Messages;