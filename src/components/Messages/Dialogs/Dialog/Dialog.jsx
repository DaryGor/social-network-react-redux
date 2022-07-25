import './../Dialogs.scss';

const Dialogs = (props) => {
    return (
        <li className={"dialogs__item"}>
            <span className={"dialogs__name"}>{ props.name }: </span>
            <span className={"dialogs__message"}>{ props.message }</span>
        </li>
    );
}

export default Dialogs;