import "../styles/first_page.css"
import logo from "../assets/moneylex_logo.png";
import icons from "../assets/icons.png";
import down from "../assets/new_down.png";
import {introVideoUrl} from "../api.ts";
import {goToCalc} from "./GoToBot.ts";
import {useState} from "react";
import {VideoPlayer} from "./Video.tsx";
import mute from "../assets/mute_button.png";

function FirstPage() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isMuted, setIsMuted] = useState<boolean>(true)

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
                {isMuted && isLoaded && <img className={"first-sound_button"} src={mute} alt={"play"} onClick={() => setIsMuted(false)}/>}
                {/*<video
                    className={"video"}
                    src={introVideoUrl}
                    controls={false}
                    muted={isMuted}
                    autoPlay
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsLoaded(true)}
                />*/}
            </div>
        </div>
    )
}

export default FirstPage;