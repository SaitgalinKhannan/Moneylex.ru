import "../styles/second_page.css"
import icons from "../assets/second_page/icons.png"
import {goToBot} from "../App.tsx";

function SecondPage() {
    return (
        <div className="screen-container">
            <div className={"second-white-text-container"}>
                <div className="second-white-text">С ЛЮБОГО БАНКА</div>
            </div>
            <div className="second-text-block">
            <div className="second-text-line">ДЛЯ ОБМЕНА РУБЛЕЙ</div>
                <div className="second-text-line">ВЫБЕРИТЕ УДОБНЫЙ БАНК</div>
            </div>
            <img className={"second-icons"} src={icons} alt="icons"/>
            <button className={"second-button"} onClick={goToBot}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    )
}

export default SecondPage;