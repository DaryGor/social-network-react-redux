import './Users.scss';
import Pagination from "../general/Pagination";
import UserCard from "./UserCard/UserCard";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount ;i++) {
        pages.push(i);
    }

    return (
        <section className="users">
            <h2 className="users__title">Пользователи</h2>
            <Pagination pages={pages} currentPage={props.currentPage} function={props.onPageChanged}/>
            <ul className="users__list">
                {
                    props.users.map(user =>
                        <UserCard name={user.name} key={user.id} status={user.status}
                                  photo={user.photos.small} id={user.id}
                                  followed={user.followed}
                                  followUser={props.followUser}
                                  unfollowUser={props.unfollowUser}/>)
                }
            </ul>
        </section>
    );
}

export default Users;