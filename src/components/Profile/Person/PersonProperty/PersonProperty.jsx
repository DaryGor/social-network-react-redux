const PersonProperty = (props) => {
    return (
        <div className={"person__block"}>
            <span className={"person__text"}>{props.property}</span>
            <span className={"person__text"}>{props.value}</span>
        </div>
    );
}

export default PersonProperty;