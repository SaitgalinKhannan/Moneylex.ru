import "../styles/first_page.css"
import logo from "../assets/moneylex_logo.png";
import icons from "../assets/icons.png";
import down from "../assets/new_down.png";
import {ExchangeRates, introVideoUrl} from "../api.ts";
import {goToCalc} from "./GoToBot.ts";
import {useState, useRef, useEffect} from "react";
import {VideoPlayer} from "./Video.tsx";
import mute from "../assets/mute_button.png";
import whats_app from "../assets/eleventh_page/whats_app.png";
import telega from "../assets/eleventh_page/telega.png";
import inst from "../assets/eleventh_page/inst.png";


interface FirstPageProps {
    course: ExchangeRates | null;
}

function FirstPage({course}: FirstPageProps) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isMuted, setIsMuted] = useState<boolean>(true)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Новое состояние

    // Ссылки на элементы
    const menuRef = useRef<HTMLDivElement | null>(null);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);
    //const headerHamburgerRef = useRef<HTMLDivElement | null>(null);

    // Функция для переключения меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Функция для закрытия меню при клике вне его
    const handleClickOutside = (event: MouseEvent) => {
        if (
            !menuRef.current?.contains(event.target as Node) && // Клик вне меню
            !hamburgerRef.current?.contains(event.target as Node)// Клик не на гамбургере
        ) {
            setIsMenuOpen(false);
        }
    };

    // Добавляем обработчик кликов при монтировании компонента
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            toggleMenu();
        }
    };

    return (
        <div className="screen-container">
            <img className={"logo"} src={logo} alt="logo"/>

            <div
                ref={hamburgerRef} // Добавляем ссылку на гамбургер
                className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/*<div className={"header"}>
                <img className={"header-logo"} src={logo} alt="logo"/>
                <div
                    ref={headerHamburgerRef} // Добавляем ссылку на гамбургер
                    className={`header-hamburger-menu ${isMenuOpen ? "open" : ""}`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>*/}

            <div ref={menuRef} className={`menu ${isMenuOpen ? "open" : ""}`}>
                <p onClick={() => scrollToSection("second-page")}>С любого банка</p>
                <p onClick={() => scrollToSection("third-page")}>Оплата криптовалютой</p>
                <p onClick={() => scrollToSection("fourth-page")}>Удобный способ получения</p>
                <p onClick={() => scrollToSection("fifth-page")}>Крупная партнёрская инфраструктура</p>
                {course?.isHidden !== true && <p onClick={() => scrollToSection("seventh-page")}>Честные курсы обмена</p>}
                <p onClick={() => scrollToSection("eighth-page")}>Оперативная поддержка</p>
                <p onClick={() => scrollToSection("ninth-page")}>Отзывы</p>
                <p onClick={() => scrollToSection("tenth-page")}>FAQ</p>
                <p onClick={() => scrollToSection("eleventh-page")}>Контакты</p>

                <div className="menu-icon-container">
                    <a href="https://api.whatsapp.com/send?phone=9932885888" target="_blank" rel="noopener noreferrer">
                        <img src={whats_app} alt="WhatsApp" className="menu-social-icon"/>
                    </a>
                    <a href="https://t.me/MoneyLexSupport" target="_blank" rel="noopener noreferrer">
                        <img src={telega} alt="Telegram" className="menu-social-icon"/>
                    </a>
                    <a href="https://www.instagram.com/moneylex_bot" target="_blank" rel="noopener noreferrer">
                        <img src={inst} alt="Instagram" className="menu-social-icon"/>
                    </a>
                </div>

                <div className={"button-container"}>
                    <button className={"first-button"} onClick={goToCalc}>КАЛЬКУЛЯТОР СДЕЛКИ</button>
                </div>
            </div>

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
            <img className={"down"} src={down} alt="down" onClick={goToCalc}/>
            <div className={"first-video-container"}>
                {!isLoaded && (
                    <div className="loader-overlay">
                        <div className="loader"/>
                    </div>

                )}
                <VideoPlayer
                    className={`video ${isLoaded ? "" : "video-hidden"}`}
                    src={introVideoUrl}
                    onLoadedData={() => setIsLoaded(true)}
                    loop={true}
                    muted={isMuted}
                    controls={false}
                    onclick={() => setIsMuted(true)}
                />
                {isMuted && isLoaded &&
                    <img className={"first-sound_button"} src={mute} alt={"play"} onClick={() => setIsMuted(false)}/>
                }
            </div>
            {/*<button className={"first-button"} onClick={goToCalc}>КАЛЬКУЛЯТОР СДЕЛКИ</button>*/}
        </div>
    )
}

export default FirstPage;