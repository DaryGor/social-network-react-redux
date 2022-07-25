import './Contacts.scss';
import Contact from "./Contact/Contact";

const Contacts = (props) => {
    let contactElements = props.contacts.map(item => <Contact id={item.id} contact={item.name} key={item.id}/>)

    return (
        <div className="contacts">
            <h2 className="contacts__title">Мои контакты</h2>
            <ul className={"contacts__list"}>
                { contactElements }
            </ul>
        </div>
    );
}

export default Contacts;