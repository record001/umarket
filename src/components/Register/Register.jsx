import "./register.scss";
import google_icon from "../../images/google.svg";
import facebook_icon from "../../images/facebook_text.svg";
import x from "../../images/x.svg";

import { useDispatch } from "react-redux";
import { toggleLoginModal } from "../../redux/actions/settingAction";
export default function Register() {
  const dispatch = useDispatch()
  return (
    <div className="register">
      <div className="register__card">
        <img className="register__close" src={x} alt="close" onClick={()=>dispatch(toggleLoginModal(false))}/>

        <h2>Регистрация</h2>

        <form className="register__form">
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="number" placeholder="Номер телефона" />
          <input type="password" placeholder="Введите пароль" />
          <input type="password" placeholder="Подтверждение пароля" />
          <button type="submit">Зарегистрироваться</button>

          <div className="register__form__agree">
            <input type="checkbox" />
            <p>
              Согласен с <a href="#!">условиями правил пользования</a> торговой
              площадкой и<a href="#!">правилами возврата</a>
            </p>
          </div>
        </form>

        <p>Или зарегистрироваться с</p>
        <div className="register__socials">
          <a href="#!">
            <img src={google_icon} alt="icon" />
          </a>
          <a href="#!">
            <img src={facebook_icon} alt="icon" />
          </a>
        </div>
        <p>У вас есть аккаунт? <a href="#!">Войти</a></p>
      </div>
    </div>
  );
}
