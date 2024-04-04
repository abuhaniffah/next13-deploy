"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  const option = {
    width: "250",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="bg-green-600 hover:bg-color-accent transition-all float-right px-2 mb-1"
        >
          ❌
        </button>
        <YouTube
          videoId={youtubeId}
          containerClassName="video-player"
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => {
            alert("Maaf Ya Beb Videonya Eror😘");
            alert("CARI YANG LAIN AJAAA");
          }}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-5 w-32 bg-pink-600 text-white right-5 hover:bg-red-400  transition-all shadow-xl"
      >
        tampilkan trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
