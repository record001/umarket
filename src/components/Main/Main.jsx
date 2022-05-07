import Brand from "./Brand/Brand";
import Favorite from "./Fovorite/Favorite";
import Hero from "./Hero/Hero";
import HomeTech from "./HomeTech/HomeTech";
import Sold from "./Sold/Sold";

export default function Main() {
    return(
         <div className="container">
             <Hero />
             <Favorite />
             <Sold title = "Хиты продаж"/>
             <HomeTech />
             <Sold title = "Выбор покупателей"/>
             <Brand />

        </div>
    )
}