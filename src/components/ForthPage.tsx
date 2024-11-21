import "../styles/forth_page.css"
import car from "../assets/forth_page/car.png"
import atm from "../assets/forth_page/atm.png"
import card from "../assets/forth_page/card.png"

function ForthPage() {

    return (
        <div className="screen-container">
            <div className={"forth-white-text-container"}>
                <div className="forth-white-text">УДОБНЫЙ СПОСОБ</div>
                <div className="forth-white-text">ПОЛУЧЕНИЯ</div>
            </div>

            <div className="options-container">
                <div className="option">
                    <img src={car} alt="Иконка доставки" className="option-first-icon"/>
                    <div className="option-content">
                        <h3 className="option-title">Доставка без предоплат</h3>
                        <p className="option-description">Пхукет | Паттайя | Бангкок | Самуи | Панган</p>
                    </div>
                </div>

                <div className="option">
                    <img src={atm} alt="Иконка банкомата" className="option-second-icon"/>
                    <div className="option-content">
                        <h3 className="option-title">Банкомат без карты</h3>
                        <p className="option-description">По всему Таиланду</p>
                    </div>
                </div>

                <div className="option">
                    <img src={card} alt="Иконка перевода" className="option-third-icon"/>
                    <div className="option-content">
                        <h3 className="option-title">Перевод на счёт в банке</h3>
                        <p className="option-description">
                            Любая оплата для физ лиц<br/>
                            Оплата инвойсов за покупку и аренду недвижимости
                        </p>
                    </div>
                </div>
            </div>


            <button className={"forth-button"}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    )
}

export default ForthPage;