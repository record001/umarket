import "./mobile.scss";
import google_play from "../../../images/google_play.png";
import app_store from "../../../images/app_store.png";
import phone_clone from "../../../images/phone_clone.png";
import logo from "../../../images/logo.svg";
import mob_line from "../../../images/mob_line.png";

export default function Mobile() {
  return (
    <div className="mobile">
      <div className="container">
        <div className="mobile__body">

          <div className="mobile__left">
            <div className="mobile__left__top">
              <a href="#!"><img src={logo} alt="logo"className="logo2"/></a>
              <img src={mob_line} alt="img" />
              <h4>mobile application</h4>
            </div>

            <h2>Заказывайте через мобильное приложение</h2>
            <div className="mobile__download">
             <a href="#!"><img src={google_play} alt="googleplay" /></a> 
             <a href="#!"><img src={app_store} alt="appstore" /></a> 
            </div>
          </div>

          <div className="mobile__right">
            <div className="mobile__right__mobile">
              <img className="phone_clone" src={phone_clone} alt="img" />
              
            </div>

            <p> Отсканируйте <span>QR</span>-код и установите приложение</p>
          </div>
        </div>
      </div>
    </div>
  );
}
