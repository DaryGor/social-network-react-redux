import {NavLink} from "react-router-dom";

const Link = (props) => {
    return (
        <NavLink to={ props.path } className={"nav-link"}> { props.link }</NavLink>
    );
}

export default Link;