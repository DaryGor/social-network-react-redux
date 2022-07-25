import './Dialogs.scss';
import Dialog from './Dialog/Dialog'
import DialogFormContainer from "./Form/DialodFormContainer";

const Dialogs = (props) => {

    let dialogElements = props.messages.map((message, index) => <Dialog key={message.id} name={message.name} message={message.message}/>);

    return (
        <div className="dialogs">
            <ul className={"dialogs__list"}>
                { dialogElements }
            </ul>
            <DialogFormContainer/>
        </div>
    );
}

export default Dialogs;