import "./brand.scss"
import nokia from "../../../images/nokia.png"
import apple from "../../../images/apple.png"
import huawei from "../../../images/huawei.png"
import lg from "../../../images/lg.png"
import mi from "../../../images/mi.png"
import samsung from  "../../../images/samsung.png"


export default function BrandLogo() {
    return(
        <div className="brand__logo">
            <div className="brand__logo__item">
                <img src={nokia} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={apple} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={samsung} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={samsung} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={samsung} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={samsung} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={huawei} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={lg} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={mi} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={mi} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={mi} alt="img" />
            </div>
            <div className="brand__logo__item">
                <img src={mi} alt="img" />
            </div>
        </div>
    )
}