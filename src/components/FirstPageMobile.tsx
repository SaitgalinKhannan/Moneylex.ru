import "../styles/FirsPage.css"
import logo from "../assets/moneylex_logo.png";
import icons from "../assets/icons.png";
import down from "../assets/new_down.png";
import {introVideoUrl} from "../api.ts";

function FirstPageMobile() {
    return (
        <div className="screen-container">
            <img className={"logo"} src={logo} alt="logo" height={"82px"} width={"312px"}/>
            <div className="text-block">
                <div className="text-line">ОНЛАЙН-СЕРВИС</div>
                <div className="text-line">с доставкой до двери</div>
            </div>
            <div className="white-bars">
                <div className="bar">НАДЁЖНО</div>
                <div className="bar">БЫСТРО</div>
                <div className="bar">УДОБНО</div>
            </div>
            <img className={"icons"} src={icons} alt="icons"/>
            <img className={"down"} src={down} alt="down"/>
            <video className={"video"} src={introVideoUrl} controls muted autoPlay/>
        </div>
    )
}

export default FirstPageMobile;