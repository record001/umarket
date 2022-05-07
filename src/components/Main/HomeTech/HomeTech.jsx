import "./homeTech.scss";
import HomeTechCard from "./HomeTechCard";
import aspirador1 from "../../../images/aspirador1.png";
import aspirador2 from "../../../images/aspirador2.png";
import aspirador3 from "../../../images/aspirador3.png";
import aspirador4 from "../../../images/aspirador4.png";
import aspirador5 from "../../../images/aspirador5.png";

export default function HomeTech() {
  return (
    <div className="homeTech">
      <h2>Техника для дома</h2>
      <div className="homeTech__wrapper">
        <HomeTechCard img={aspirador1} title="Встраиваемая техника" />
        <HomeTechCard img={aspirador2} title="Пылесосы" />
        <HomeTechCard
          img={aspirador3}
          title="Стиральные машины"
        />
        <HomeTechCard img={aspirador4} title="Холодильники" />
        <HomeTechCard img={aspirador5} title="Кондиционеры" />
      </div>
    </div>
  );
}
