import "./homeTech.scss"

export default function HomeTechCard({img, title}) {
    return(
        <div className="homeTechCard">
                <img src={img} alt="img" />
                <h4>{title}</h4>
        </div>
    )
}