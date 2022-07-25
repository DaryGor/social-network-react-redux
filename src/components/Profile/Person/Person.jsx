import './Person.scss';
import Photo from '../../general/PersonPhoto'
import PersonProperty from "./PersonProperty/PersonProperty";

const Person = () => {
    return ( <div>
        <div className="img-wrapper">
            <img src={"https://art-ll.ru/media/uslugi/oformlenie-fotozony/oformlenie-fotozony-3.jpg"} alt={"Оформление страницы"}/>
        </div>
        <div className="person">
            <div className="person__photo">
                <Photo src={"https://avatars.mds.yandex.net/get-zen_doc/197911/pub_5abf43a52f578c01b35ad69b_5abf47f5f031731b9711ad29/scale_1200"}/>
            </div>
            <div className="person__info">
                <h2 className={"person__name"}>Дарья Горнова</h2>
                <PersonProperty property={"Дата рождения"} value={"7 мая"}/>
                <PersonProperty property={"Город"} value={"Пермь"}/>
                <PersonProperty property={"Образование"} value={"ПНИПУ'19"}/>
            </div>
        </div>
    </div>

    );
}

export default Person;