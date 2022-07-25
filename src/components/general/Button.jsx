import './_General.scss';

const Button = (props) => {
    return (
        <button className={`button ${props.className}`} type="button" onClick={ props.function }> {props.text} </button>
    );
}

export default Button;