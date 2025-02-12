import "../styles/eighth_page.css"
import icons from "../assets/icons.png";
import {useMediaQuery} from "usehooks-ts";
import {tutorialVideoUrl} from "../api.ts";
import {useState} from "react";
import {VideoPlayer} from "./Video.tsx";
import mute from "../assets/mute_button.png";

function EighthPage() {
    const isMobile = useMediaQuery("(max-width: 651px)")
    const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
    const [isMuted, setIsMuted] = useState<boolean>(true);

    return (
        <div id="eighth-page" className="eighth-screen-container">
            <div className={"eighth-white-text-container"}>
                {/*<div className="eighth-white-text">ОПЕРАТИВНАЯ ПОДДЕРЖКА</div>
                <div className="eighth-white-text">ДЛЯ ПОМОЩИ КЛИЕНТАМ</div>*/}
                <div className="eighth-white-text">ОПЕРАТИВНАЯ</div>
                <div className="eighth-white-text">ПОДДЕРЖКА</div>
            </div>

            <div className="video-container">
                <VideoPlayer
                    className={`rectangular-video ${videoLoaded ? "" : "video-hidden"}`}
                    src={tutorialVideoUrl}
                    onLoadedData={() => setVideoLoaded(true)}
                    loop={true}
                    muted={isMuted}
                    controls={false}
                    onclick={() => setIsMuted(true)}
                />
                {isMuted && <img className={"sound_button"} src={mute} alt={"play"} onClick={() => setIsMuted(false)}/>}
            </div>

            {!isMobile && <img className={"eighth-icons"} src={icons} alt={"image"}/>}
        </div>
    )
}

export default EighthPage;