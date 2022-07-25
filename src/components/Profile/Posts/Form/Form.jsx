import React from 'react';
import './Form.scss';
import Button from './../../../general/Button';
import Textarea from '../../../general/Textarea';

const Form = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewText(text);
    };

    return (
        <form className="form">
            <Textarea refValue={newPostElement} newText={props.newPostText} function={onPostChange}/>
            <Button text={"Опубликовать"} function={onAddPost}/>
        </form>
    );
}

export default Form;