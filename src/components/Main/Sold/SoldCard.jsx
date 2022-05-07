import "./sold.scss";
import React from "react";
import samsung1 from "../../../images/samsung1.png";
import samsung2 from "../../../images/samsung2.png";
import star from "../../../images/Star.svg";
import srav from "../../../images/srav.svg";
import srav_blue from "../../../images/srav.svg";
import shopping_card_white from "../../../images/shopping_cart_white.svg";
import heart from "../../../images/heart.svg";
import heart_blue from "../../../images/heart_blue.svg";

export default function SoldCard() {
    
  return (
    <div className="soldCard__wrapper">
      <div className="soldCard">
        <img src={samsung1} alt="img" />
        <p>
          Samsung Galaxy A41 Red <br /> 64 GB
        </p>
        <h4>3 144 000 сум</h4>
        <p>От 385 000 сум/12 мес</p>

        <div className="soldCard__star">
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
        </div>

        <div className="soldCard__act">
          <button className="btn1">
            <img src={shopping_card_white} alt="img" />В корзину
          </button>
          <img src={srav} alt="img" />
          <img  className="heart" src={heart} alt="img" />
        </div>
      </div>

      <div className="soldCard">
        <img src={samsung1} alt="img" />
        <p>
          Samsung Galaxy A41 Red <br /> 64 GB
        </p>
        <h4>3 144 000 сум</h4>
        <p>От 385 000 сум/12 мес</p>

        <div className="soldCard__star">
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
        </div>

        <div className="soldCard__act">
          <button className="btn1">
            <img src={shopping_card_white} alt="img" />В корзину
          </button>
          <img src={srav} alt="img" />
          <img className="heart" src={heart} alt="img" />
        </div>
      </div>

      <div className="soldCard">
        <img src={samsung1} alt="img" />
        <p>
          Samsung Galaxy A41 Red <br /> 64 GB
        </p>
        <h4>3 144 000 сум</h4>
        <p>От 385 000 сум/12 мес</p>

        <div className="soldCard__star">
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
        </div>

        <div className="soldCard__act">
          <button className="btn2">Заказать</button>
          <img src={srav} alt="img" />
          <img className="heart" src={heart_blue} alt="img" />
        </div>
      </div>

      <div className="soldCard">
        <img src={samsung2} alt="img" />
        <p>
          Samsung Galaxy A41 Red <br /> 64 GB
        </p>
        <h4>3 144 000 сум</h4>
        <p>От 385 000 сум/12 мес</p>

        <div className="soldCard__star">
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
          <img src={star} alt="img" />
        </div>

        <div className="soldCard__act">
          <button className="btn2">Заказать</button>
          <img src={srav_blue} alt="img" />
          <img className="heart" src={heart} alt="img" />
        </div>
      </div>
    </div>
  );
}
