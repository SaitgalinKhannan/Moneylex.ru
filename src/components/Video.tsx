import {FC, useEffect, useRef} from "react";

interface VideoProps {
    src: string;
    className: string;
    onLoadedData: () => void;
    loop: boolean;
    muted: boolean;
    onclick: () => void;
}

export const VideoPlayer: FC<VideoProps> = ({src, className, loop, onLoadedData, muted, onclick}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    /*useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement && play) {
            videoElement.play()
                .then(r => console.log(r))
                .catch(e => console.log(e));
        }
    }, [play]);*/

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Видео видно на экране - воспроизводим
                        videoElement.play()
                            .then(r => console.log(r))
                            .catch(e => console.log(e));
                    } else {
                        // Видео за пределами экрана - ставим на паузу
                        videoElement.pause();
                    }
                });
            },
            {
                threshold: 0.5, // 50% видео должно быть видно, чтобы считать его видимым
            }
        );

        observer.observe(videoElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return <video
        className={className}
        ref={videoRef}
        src={src}
        playsInline
        muted={muted}
        loop={loop}
        onLoadedData={onLoadedData}
        onClick={onclick}
    />;
};