import React from "react";
import { useState, useRef } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import I from "../assets/images/I.jpg";
import Three from "../assets/images/three.jpg";
import Sarkar from "../assets/images/Sarkar.jpg";
import NineSix from "../assets/images/Nine.jpg";
import Top from "../assets/audios/Top-Tucker-MassTamilan.org.mp3";
import Ennodu from "../assets/audios/Ennodu-Nee-Irundhal.mp3";
import Kannu from "../assets/audios/Kannazhaga.mp3";
import Kadhal from "../assets/audios/Kaathalae_Kaathalae-MassTamilan.com.mp3";
import Idhazh from "../assets/audios/Idhazhin-Oram.mp3";
import Sim from "../assets/audios/Simtaangaran-MassTamilan.org.mp3";

const smallcard = {
  objectFit: "cover",
  width: "70px",
  borderRadius: "4px",
  height: "60px",
};
const playlist = [
  { title: "Top Tucker  (Sarkar)", audio: Top, image: Sarkar },
  { title: "Ennodu Nee Irundhal (I)", audio: Ennodu, image: I },
  { title: "Kannazhaga(Moonu)", audio: Kannu, image: Three },
  { title: "Kaathalae Kaathalae (96)", audio: Kadhal, image: NineSix },
  { title: "Idhazhin Oram (Moonu)", audio: Idhazh, image: Three },
  { title: "Simtaangaran (Sarkar)", audio: Sim, image: Sarkar },
];

export default function Cards() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const handleButtonClick = (audio) => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.src = audio;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 bg-gray-900 gap-4">
        {playlist.map((item, index) => (
          <div key={index} className="text-sm font-medium gap-4">
            <div className="rounded items-center flex flex-grow group hover:bg-gray-500 hover:text-black cursor-pointer bg-gray-700">
              <div>
                <img src={item.image} style={smallcard} alt={item.title} />
              </div>
              <div className="flex w-full items-center">
                <p className="m-2 w-[85%]">{item.title}</p>
                <button
                  className="flex w-[15%] opacity-0 group-hover:opacity-100"
                  onClick={() => handleButtonClick(item.audio)}
                >
                  <audio ref={audioRef} />
                  <PlayCircleFilledIcon className="text-customGreen " />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
