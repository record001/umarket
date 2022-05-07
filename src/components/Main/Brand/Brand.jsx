import "./brand.scss"
import BrandLogo from "./BrandLogo"
import BrandMenu from "./BrandMenu"

export default function Brand() {
    return(
        <div className="brand">
            <BrandMenu />
            <BrandLogo />
        </div>
    )
}