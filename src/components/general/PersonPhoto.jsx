import './_General.scss';

const Photo = (props) => {
    return (
        <img src={props.src} className="photo" alt={"Фото профиля"}/>
    );
}

export default Photo;