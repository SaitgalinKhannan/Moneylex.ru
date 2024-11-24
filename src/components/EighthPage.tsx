import "../styles/eighth_page.css"
import icons from "../assets/icons.png";
import {useMediaQuery} from "usehooks-ts";
import {circleVideoUrl} from "../api.ts";
import {useState} from "react";
import {goToBot} from "../App.tsx";

function EighthPage() {
    const isMobile = useMediaQuery("(max-width: 651px)")
    const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

    return (
        <div className="eighth-screen-container">
            <div className={"eighth-white-text-container"}>
                <div className="eighth-white-text">ОПЕРАТИВНАЯ ПОДДЕРЖКА</div>
                <div className="eighth-white-text">ДЛЯ ПОМОЩИ КЛИЕНТАМ</div>
            </div>

            <div className="video-container">
                <video
                    className={`circle-video ${videoLoaded ? "" : "video-hidden"}`}
                    src={circleVideoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                />
            </div>

            {/*<img className={"circle-image"} src={image} alt={"image"}/>*/}
            {!isMobile && <img className={"eighth-icons"} src={icons} alt={"image"}/>}

            <button className={"eighth-button"}  onClick={goToBot}>УЗНАТЬ КУРС</button>
        </div>
    )
}

export default EighthPage;