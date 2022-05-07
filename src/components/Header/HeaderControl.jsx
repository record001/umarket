import React from "react";
import "./header.scss"
import logo from  "../../images/logo.svg"
import search from "../../images/search.svg"
import img_icon from "../../images/img_icon.svg"
import shopping_cart from "../../images/shopping_cart.svg"
import heart from "../../images/heart.svg"
import srav from "../../images/srav.svg"
import login from "../../images/login.svg"

import { useDispatch } from "react-redux";
import { toggleLoginModal } from "../../redux/actions/settingAction";
export default function HeaderControl({changeMind}) {
    
    const dispatch = useDispatch()

    return (
        <div className="header">
            <div className="container">
                <div className="header__body">
                       <a href="#!"> <img src={logo} alt="logo" className="header__logo" /></a>

                        <div className="header__search">
                            <img src= {search} alt="search" />
                            <input type="text" id="id" placeholder="Поиск по товарам"/>
                            <img src={img_icon} alt="img" className="img_icon"/>
                        </div>

                        <div className="header__card_wrapper">
                            <div className="header__card">
                                <img src={shopping_cart} alt="img" />
                                <p>Корзина</p>
                            </div>
                            <div className="header__card">
                                <img src={heart} alt="img" />
                                <p>Избранные</p>
                            </div>
                            <div className="header__card">
                                <img src={srav} alt="img" />
                                <p>Сравнение</p>
                            </div>

                            <div className="header__card " onClick={() => dispatch(toggleLoginModal(true))}>

                                <img src={login} alt="img" />
                                <p>Войти</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}