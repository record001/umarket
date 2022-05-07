import "./footer.scss";
import payme from  "../../images/payme.svg";
import humo from "../../images/humo.svg";
import uzcard from "../../images/uzcard.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__body">
          <div className="contact__wrapper">
            <div className="contact__info">
              <h4>Компания</h4>
              <ul>
                <li>
                  <a href="#!">O компании</a>
                </li>
                <li>
                  <a href="#!">Адреса магазинов</a>
                </li>
              </ul>
            </div>
            <div className="contact__info">
              <h4>Информация</h4>
              <ul>
                <li>
                  <a href="#!">Рассрочка</a>
                </li>
                <li>
                  <a href="#!">Доставка </a>
                </li>
                <li>
                  <a href="#!">Бонусы </a>
                </li>
              </ul>
            </div>
            <div className="contact__info">
              <h4>Помощь покупателю</h4>
              <ul>
                <li>
                  <a href="#!">Вопросы и ответы</a>
                </li>
                <li>
                  <a href="#!">Как сделать заказ на сайте </a>
                </li>
                <li>
                  <a href="#!">Обмен и возврат </a>
                </li>
              </ul>
            </div>
            <div className="contact__info">
              <h4>Способ оплаты</h4>
              <ul className="pay_option">
                <li>
                  <a href="#!">
                    <img src={payme} alt="img" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={humo} alt="img" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={uzcard} alt="img" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact__info">
              <h4>Мы в социальных сетях</h4>
              <ul className="social">
                <li>
                  <a href="#!">
                    <img src={linkedin} alt="img" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={instagram} alt="img" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={twitter} alt="img" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={facebook} alt="img" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__bottom">
            <div className="contact__call">
              <h4>Единый кол центр</h4>
              <a href="#!">+9980 71-54-60-60</a>
            </div>
            <div className="contact__call">
              <h4>Почта для пожеланий и предложений</h4>
              <a href="#!">info@udevsmarket.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
