import React from "react";
import "./top.scss"
import phone from  "../../../images/phone.svg"
import ru from "../../../images/lang.svg"
import location from "../../../images/location_on.svg"

export default function Top() {
    return(
        <div className="top">
            <div className="container">
                <div className="top__body">
                    <ul className="top__list">
                        <li><a className="top__link" href="#!">Магазины</a></li>
                        <li><a className="top__link" href="#!">Оставить отзыв</a></li>
                        <li><a className="top__link" href="#!">Доставка</a></li>
                    </ul>

                    <div className="top__info">
                        <div className="top__phone">
                            <img src={phone} alt="phone" />
                            <a href="#!">+998 97 778-17-08</a>
                        </div>

                        <div className="top__location">
                            <img src={location} alt="location" />
                            <a href="#!">Ташкент</a>
                        </div>

                        <div className="top__lang">
                            <img src={ru} alt="lang" />
                            
                            <select >
                                <option value="ru">Рус</option>
                                <option value="uz">Uzb</option>
                                <option value="en">Eng</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}