import "./sold.scss"
import SoldCard from "./SoldCard"

export default function Sold({title}) {
    return(
        <div className="sold">

            <h2>{title}</h2>
            <SoldCard />
        </div>
    )
}