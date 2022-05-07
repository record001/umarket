import "./brand.scss"

export default function BrandMenu() {
    return(
        <div className="brand__menu">
            <h2>Популярные бренды</h2>
            <ul className="brand__list">
                <li className="brand__item"><a  href="#!">Телефоны</a></li>
                <li className="brand__item"><a  href="#!">Аксессуары</a></li>
                <li className="brand__item"><a  href="#!">Premium</a></li>
                <li className="brand__item"><a  href="#!">Спорт</a></li>
                <li className="brand__item"><a  href="#!">Игрушки</a></li>
                <li className="brand__item"><a  href="#!">Красота</a></li>
                <li className="brand__item"><a  href="#!">Книги</a></li>
                <li className="brand__item"><a  href="#!">Обувь</a></li>
            </ul>
        </div>
    )
}