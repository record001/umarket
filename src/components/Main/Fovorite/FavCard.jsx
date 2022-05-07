import "./favorite.scss"


export default function FavCard(props) {
    return(
        <div className="favCard">
                <img src={props.img} alt="img" />
                <h4>{props.title}</h4>
        </div>
    )
}