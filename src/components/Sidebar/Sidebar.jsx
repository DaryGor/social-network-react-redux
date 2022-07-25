import './Sidebar.scss'
import Link from './Link/Link'

const Sidebar = () => {
    return (
        <nav className="sidebar nav flex-column">
            <Link link={"Мой профиль"} path="/profile"/>
            <Link link={"Сообщения"} path="/messages"/>
            <Link link={"Пользователи"} path="/users"/>
        </nav>
    );
}

export default Sidebar;