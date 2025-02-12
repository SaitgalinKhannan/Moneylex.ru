import "../styles/eleventh_page.css"
import whats_app from "../assets/eleventh_page/whats_app.png"
import telega from "../assets/eleventh_page/telega.png"
import inst from "../assets/eleventh_page/inst.png"
import goToBot from "./GoToBot.ts";

function EleventhPage() {

    return (
        <div id="eleventh-page" className="eleventh-screen-container">
            <div className={"eleventh-white-text-container"}>
                <div className="eleventh-white-text">КОНТАКТЫ</div>
            </div>

            <div className="icon-container">
                <a href="https://api.whatsapp.com/send?phone=9932885888" target="_blank" rel="noopener noreferrer">
                    <img src={whats_app} alt="WhatsApp" className="social-icon"/>
                </a>
                <a href="https://t.me/MoneyLexSupport" target="_blank" rel="noopener noreferrer">
                    <img src={telega} alt="Telegram" className="social-icon"/>
                </a>
                <a href="https://www.instagram.com/moneylex_bot" target="_blank" rel="noopener noreferrer">
                    <img src={inst} alt="Instagram" className="social-icon"/>
                </a>
            </div>

            <button className={"eleventh-button"} onClick={goToBot}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    )
}

export default EleventhPage;