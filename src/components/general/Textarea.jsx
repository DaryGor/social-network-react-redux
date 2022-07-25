import './_General.scss';

const Textarea = (props) => {
    return (
        <textarea type="text" className="input" ref={props.refValue} value={props.newText} onChange={props.function}/>
    );
}

export default Textarea;