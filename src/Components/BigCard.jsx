import React, { useRef, useState } from "react";
import I from "../assets/images/I.jpg";
import Three from "../assets/images/three.jpg";
import Sarkar from "../assets/images/Sarkar.jpg";
import NineSix from "../assets/images/Nine.jpg";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

import Top from "../assets/audios/Top-Tucker-MassTamilan.org.mp3";
import Ennodu from "../assets/audios/Ennodu-Nee-Irundhal.mp3";
import Kannu from "../assets/audios/Kannazhaga.mp3";
import Kadhal from "../assets/audios/Kaathalae_Kaathalae-MassTamilan.com.mp3";
import Idhazh from "../assets/audios/Idhazhin-Oram.mp3";
import Sim from "../assets/audios/Simtaangaran-MassTamilan.org.mp3";
import CEO from "../assets/audios/CEO-in-the-House-MassTamilan.org.mp3";
import Nee from "../assets/audios/Nee-Partha.mp3";
import Thaabangal from "../assets/audios/Thaabangale-MassTamilan.com.mp3";

const playlist = [
  {
    title: "Top Tucker (Sarkar)",
    audio: Top,
    subtitle: "A.R.Rahman",
    image: Sarkar,
  },

  {
    title: "Thabangalae Thabangaale",
    audio: Thaabangal,
    subtitle: "A.R.Rahman",
    image: NineSix,
  },
  {
    title: "CEO Intro Bgm (Sarkar)",
    audio: CEO,
    subtitle: "A.R.Rahman",
    image: Sarkar,
  },
  {
    title: "Nee Paartha Vizhigal",
    audio: Nee,
    subtitle: "Anirudh Ravichander",
    image: Three,
  },
  {
    title: "Ennodu Nee Irundhal (I)",
    audio: Ennodu,
    subtitle: "A.R.Rahman",
    image: I,
  },
  {
    title: "Kannazhaga (Moonu)",
    audio: Kannu,
    subtitle: "A.R.Rahman",
    image: Three,
  },
  {
    title: "Kaathalae Kaathalae (96)",
    audio: Kadhal,
    subtitle: "A.R.Rahman",
    image: NineSix,
  },
  {
    title: "Idhazhin Oram (Moonu)",
    audio: Idhazh,
    subtitle: "A.R.Rahman",
    image: Three,
  },
  {
    title: "Simtaangaran (Sarkar)",
    audio: Sim,
    subtitle: "A.R.Rahman",
    image: Sarkar,
  },
  {
    title: "Top Tucker (Sarkar)",
    audio: Top,
    subtitle: "A.R.Rahman",
    image: Sarkar,
  },

  {
    title: "Thabangalae Thabangaale",
    audio: Thaabangal,
    subtitle: "A.R.Rahman",
    image: NineSix,
  },
  {
    title: "CEO Intro Bgm (Sarkar)",
    audio: CEO,
    subtitle: "A.R.Rahman",
    image: Sarkar,
  },
  {
    title: "Nee Paartha Vizhigal",
    audio: Nee,
    subtitle: "Anirudh Ravichander",
    image: Three,
  },
  {
    title: "Ennodu Nee Irundhal (I)",
    audio: Ennodu,
    subtitle: "A.R.Rahman",
    image: I,
  },
  {
    title: "Kannazhaga (Moonu)",
    audio: Kannu,
    subtitle: "A.R.Rahman",
    image: Three,
  },
  {
    title: "Kaathalae Kaathalae (96)",
    audio: Kadhal,
    subtitle: "A.R.Rahman",
    image: NineSix,
  },
  {
    title: "Idhazhin Oram (Moonu)",
    audio: Idhazh,
    subtitle: "A.R.Rahman",
    image: Three,
  },
  {
    title: "Simtaangaran (Sarkar)",
    audio: Sim,
    subtitle: "A.R.Rahman",
    image: Sarkar,
  },
  {
    title: "Nee Paartha Vizhigal",
    audio: Nee,
    subtitle: "Anirudh Ravichander",
    image: Three,
  },
  {
    title: "Ennodu Nee Irundhal (I)",
    audio: Ennodu,
    subtitle: "A.R.Rahman",
    image: I,
  },
  {
    title: "Kannazhaga (Moonu)",
    audio: Kannu,
    subtitle: "A.R.Rahman",
    image: Three,
  },
  {
    title: "Kaathalae Kaathalae (96)",
    audio: Kadhal,
    subtitle: "A.R.Rahman",
    image: NineSix,
  },
  {
    title: "CEO Intro Bgm (Sarkar)",
    audio: CEO,
    subtitle: "A.R.Rahman",
    image: Sarkar,
  },
  {
    title: "Nee Paartha Vizhigal",
    audio: Nee,
    subtitle: "Anirudh Ravichander",
    image: Three,
  },
  {
    title: "Ennodu Nee Irundhal (I)",
    audio: Ennodu,
    subtitle: "A.R.Rahman",
    image: I,
  },
  {
    title: "Kannazhaga (Moonu)",
    audio: Kannu,
    subtitle: "A.R.Rahman",
    image: Three,
  },
];

export default function BigCard() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const handleClick = (audio) => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.src = audio;
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {playlist.map((item, index) => (
          <div key={index} className="flex gap-3  ">
            <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
              <div className="space-y-2 ">
                <img src={item.image} />

                <p className="font-semibold text-base space-y-2">
                  {item.title}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm text-gray-300">
                    {item.subtitle}
                  </p>
                  <button
                    className="flex w-[15%] opacity-0 group-hover:opacity-100 "
                    onClick={() => handleClick(item.audio)}
                  >
                    <audio ref={audioRef} />
                    <PlayCircleFilledWhiteIcon
                      className="text-green-500
                    "
                      style={{ width: "32px", height: "32px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
