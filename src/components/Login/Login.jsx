import "./login.scss";
import x from "../../images/x.svg";
import google_icon from "../../images/google.svg";
import facebook_icon from "../../images/facebook_text.svg";


export default function Login() {
  return (
    <div className="login">
      <div className="login__card">
        <img className="login__close" src={x} alt="close" />

        <h2>Добро пожаловать</h2>
        <p>Войдите с вашим номером телефона или паролем</p>

        <form className="login__form">
            <input type="number" placeholder="+998"/>
            <button type="submit">Получить код</button>
        </form>

        <p>Или войти с</p>

        <div className="login__socials">
          <a href="#!">
            <img src={google_icon} alt="icon" />
          </a>
          <a href="#!">
            <img src={facebook_icon} alt="icon" />
          </a>
        </div>

        <p>У вас есть аккаунт? <a href="#!">Зарегистрируйтесь</a></p>
      </div>
    </div>
  );
}
