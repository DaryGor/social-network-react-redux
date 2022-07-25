import React from 'react';
import Textarea from "../../../general/Textarea";
import Button from "../../../general/Button";

const DialogForm = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    };

    return (
        <form className="form">
            <Textarea refValue={newMessageElement} newText={props.newMassageText} function={onMessageChange}/>
            <Button text={"Отправить"} function={addMessage}/>
        </form>
    );
}

export default DialogForm;