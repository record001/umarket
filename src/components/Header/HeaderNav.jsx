import React from "react";
import "./header.scss"

export default function HeaderNav() {
    return (
        <div className="nav">
            <div className="container">
                <ul className="nav__list">
                        <li className="nav__item"><a className="nav__link" href="#!">Акции и скидки</a></li>
                        <li className="nav__item"><a className="nav__link" href="#!">Смартфоны и гаджеты</a></li>
                        <li className="nav__item"><a className="nav__link" href="#!">Телевизоры и аудио</a></li>
                        <li className="nav__item"><a className="nav__link" href="#!">Техника для кухни</a></li>
                        <li className="nav__item"><a className="nav__link" href="#!">Красота и здоровье</a></li>
                        <li className="nav__item"><a className="nav__link" href="#!">Ноутбуки и компьютеры</a></li>
                </ul>
            </div>
        </div>
    )
}