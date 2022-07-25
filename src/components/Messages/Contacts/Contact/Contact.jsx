import './Contact.scss';
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    return (
        <li className={"contact"}>
            <NavLink to={"/messages/" + props.id} className={"contact__link"}> {props.contact} </NavLink>
        </li>
    );
}

export default Contact;