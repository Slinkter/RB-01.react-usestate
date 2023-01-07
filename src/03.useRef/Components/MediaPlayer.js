import React, { useRef, useState } from "react";

const MediaPlayer = () => {
    const [isPlay, setIsPlay] = useState(false);
    const videoRef = useRef(null);

    const video1 =
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const video2 = "../video/videoplayback.mp4";

    return (
        <div>
            <video width="400" ref={videoRef}>
                <source src={video1} type="video/mp4" />
            </video>
            <button
                onClick={() => {
                    const video = videoRef.current;
                    isPlay ? video.pause() : video.play();
                    setIsPlay(!isPlay);
                }}
            >
                {isPlay ? "pause" : "play"}
            </button>
        </div>
    );
};

export default MediaPlayer;
