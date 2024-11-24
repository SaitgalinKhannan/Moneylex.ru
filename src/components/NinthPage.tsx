import "../styles/ninth_page.css"
import {circleVideo, getVideoCount} from "../api.ts";
import left from "../assets/ninth_page/left.png"
import right from "../assets/ninth_page/right.png"
import {useEffect, useState} from "react";

function NinthPage() {
    const [videoCount, setVideoCount] = useState<number>(0);
    const [videoNumber, setVideoNumber] = useState<number>(0);
    const [dots, setDots] = useState<number[]>([])
    const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

    useEffect(() => {
        getVideoCount()
            .then(r => {
                setVideoCount(r)
            })
            .catch(e => console.log(e))
    }, []);

    useEffect(() => {
        const localDots = []
        for (let i = 0; i < videoCount; i++) {
            localDots.push(i)
        }
        setDots(localDots);
    }, [videoCount]);

    useEffect(() => {
        const dots = document.getElementsByClassName("dot");
        try {
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[videoNumber].className += " active";
        } catch (e) {
            console.log(e)
        }
    }, [dots, videoNumber]);

    useEffect(() => {
        setVideoLoaded(false);
        const dots = document.getElementsByClassName("dot");
        try {
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[videoNumber].className += " active";
        } catch (e) {
            console.log(e)
            console.log(dots[videoNumber])
        }
    }, [videoNumber]);

    const handleLeftClick = () => {
        if (videoNumber > 0) {
            setVideoNumber(videoNumber - 1)
        } else {
            setVideoNumber(videoCount - 1)
        }
    }

    const handleRightClick = () => {
        if (videoNumber < videoCount - 1) {
            setVideoNumber(videoNumber + 1)
        } else {
            setVideoNumber(0)
        }
    }

    return (
        <div className="ninth-screen-container">
            <div className={"ninth-white-text-container"}>
                <div className="ninth-white-text">ОТЗЫВЫ</div>
            </div>

            <div className="ninth-video-container">
                <img className={"left-arrow"} src={left} alt={"left"} onClick={handleLeftClick}/>
                <video
                    className={`ninth-circle-video ${videoLoaded ? "" : "video-hidden"}`}
                    src={circleVideo(videoNumber)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                />
                <img className={"right-arrow"} src={right} alt={"right"} onClick={handleRightClick}/>
            </div>

            {videoCount > 0 && (
                <div className={"dots"}>
                    {dots.map((value) =>
                        <span key={value} className="dot"></span>
                    )}
                </div>
            )}
        </div>
    )
}

export default NinthPage;