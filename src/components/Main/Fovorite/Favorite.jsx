import FavCard from "./FavCard";
import "./favorite.scss";
import smartphone from  "../../../images/smatrphone.png";
import computer from "../../../images/computer.png";
import monitor from "../../../images/monitor.png";
import accsessuar from "../../../images/accsessuar.png";

export default function Favorite() {
  return (
    <div className="favorite">
        <h2 >Популярные категории</h2>
      <div className="favorite__wrapper">
        <FavCard img={smartphone} title="Смартфоны" />
        <FavCard img={monitor} title="Мониторы" />
        <FavCard img={computer} title="Компьютеры" />
        <FavCard img={accsessuar} title="Аксессуары" />
      </div>
    </div>
  );
}
