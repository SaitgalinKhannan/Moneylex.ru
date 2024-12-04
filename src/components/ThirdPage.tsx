import "../styles/third_page.css"
import tether from "../assets/tether.png"
import clock from "../assets/third_page/clock.png"
import percent from "../assets/third_page/percent_down.png"
import shield from "../assets/third_page/shield.png"
import gears from "../assets/third_page/gears.png"
import earth from "../assets/third_page/earth.png"
import goToBot from "./GoToBot.ts";

function ThirdPage() {
    return (
        <div className="screen-container">
            <div className={"white-text-container"}>
                <div className="white-text">ОПЛАТА</div>
                <div className="white-text">КРИПТОВАЛЮТОЙ</div>
            </div>
            <img className={"third-icons"} src={tether} alt="tether"/>

            <div className="features-container">
                <div className="feature-item">
                    <img src={clock} alt="Мгновенные переводы" className="feature-icon"/>
                    <span className="feature-text">Мгновенные переводы</span>
                </div>
                <div className="feature-item">
                    <img src={percent} alt="Низкие комиссии" className="feature-percent-icon"/>
                    <span className="feature-text">Низкие комиссии</span>
                </div>
                <div className="feature-item">
                    <img src={shield} alt="Отсутствие валютных ограничений" className="feature-icon"/>
                    {/*<span className="feature-text">Отсутствие валютных ограничений</span>*/}
                    <span className="feature-text">
                        <span className="feature-line">Отсутствие</span>
                        <span className="feature-line">валютных ограничений</span>
                    </span>
                </div>
                <div className="feature-item">
                    <img src={gears} alt="Простота использования" className="feature-icon"/>
                    <span className="feature-text">Простота использования</span>
                </div>
                <div className="feature-item">
                    <img src={earth} alt="Широкая география" className="feature-icon"/>
                    <span className="feature-text">Широкая география</span>
                </div>
            </div>


            <button className={"third-button"} onClick={goToBot}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    )
}

export default ThirdPage;