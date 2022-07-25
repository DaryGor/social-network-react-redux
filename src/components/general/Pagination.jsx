import './_General.scss';

const Pagination = (props) => {
    let pageElements = props.pages.map((page, index) => <li className="pagination__item">
        <button className={`pagination__button ${props.currentPage === page && "active"}`} type="button"
                onClick={ () => {props.function(+page)} }
                key={index}> {page} </button></li>)

    return (
        <ul className={"pagination"}>
            { pageElements }
        </ul>

    );
}

export default Pagination;