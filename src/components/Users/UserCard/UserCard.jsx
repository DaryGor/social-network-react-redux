import './UserCard.scss';
import Photo from "../../general/PersonPhoto";
import Button from "../../general/Button";
import noPhoto from '../../../assets/img/noPhoto.jpg';

const UserCard = (props) => {
    return (
        <li className={"UserCard"}>
            <div className={"UserCard__photo-block"}>
                <div className={"UserCard__photo"}>
                    <Photo src={props.photo !== null ? props.photo : noPhoto }/>
                </div>
                {
                    props.followed
                        ? <Button text={"Удалить"} className={"UserCard__btn"} function={ () => {
                            props.unfollowUser(props.id)} }/>
                        : <Button text={"Добавить"} className={"UserCard__btn"} function={() => {
                            props.followUser(props.id)}  }/>
                }

            </div>
            <div className={"UserCard__card"}>
                <span className={"UserCard__name"}>{props.name}</span>
                <span className={"UserCard__status"}>{props.status}</span>
                <span className={"UserCard__city"}>{"props.city"}, <br />{"props.country"}</span>
            </div>
        </li>
    );
}

export default UserCard;