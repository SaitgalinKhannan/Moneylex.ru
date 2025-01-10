import "../styles/fifth_page.css"
import earth from "../assets/fifth_page/earth.png"

function FifthPage() {
    return (
        <div className="fifth-screen-container">
            <div className={"fifth-white-text-container"}>
                <div className="fifth-white-text">КРУПНАЯ ПАРТНЁРСКАЯ</div>
                <div className="fifth-white-text">ИНФРАСТРУКТУРА</div>
            </div>
            <img className={"fifth-icon"} src={earth} alt={"earth"}/>
            <div className="fifth-stats-container">
                <div className="stat-group">
                    <div className="stat-number">
                        <span className="number">19 </span>
                        <span className="text">офисов</span>
                    </div>
                    <div className="stat-description">по всей России</div>
                </div>
                <div className="stat-group">
                    <div className="stat-number">
                        <span className="number">18 </span>
                        <span className="text">офисов</span>
                    </div>
                    <div className="stat-description">по миру</div>
                </div>
                <div className="stat-group">
                    <div className="stat-number">
                        <span className="number">28 </span>
                        <span className="text">стран</span>
                    </div>
                    <div className="stat-description">с курьерской доставкой</div>
                </div>
                <div className="stat-group">
                    <div className="stat-number">
                        <span className="number">10000 +</span>
                    </div>
                    <div className="stat-description">довольных клиентов</div>
                </div>
                <div className="stat-group">
                    <div className="stat-number">
                        <span className="number">3 </span>
                        <span className="text">года</span>
                    </div>
                    <div className="stat-description">успешной работы без задержек</div>
                </div>
                {/*<div className="stat-link">
                    <span>ГЕОГРАФИЯ ОФИСОВ</span>
                    <img src={down} alt="icon" className="stat-link-icon"/>
                </div>*/}
            </div>
        </div>
    )
}

export default FifthPage;