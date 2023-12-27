import React from "react";
import I from "../assets/images/I.jpg";
import Three from "../assets/images/three.jpg";
import Sarkar from "../assets/images/Sarkar.jpg";
import NineSix from "../assets/images/Nine.jpg";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";


const BigCard = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex gap-3  ">
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2 ">
              <img src={Sarkar} />

              <p className="font-semibold text-base space-y-2">
                Top Tucker (Sarkar)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">Vidhyasagar</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2 ">
              <img src={I} />
              <p className="font-semibold text-base space-y-2">
                Mersalayiten (I)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">A.R.Rahman</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={NineSix} />
              <p className="font-semibold text-base space-y-2">
                Thaabangaale (96)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">A.R.Rahman</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>

          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={Sarkar} />
              <p className="font-semibold text-base space-y-2">
                CEO Intro Bgm (Sarkar)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">
                  Santhosh Narayanan
                </p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={Three} />
              <p className="font-semibold text-base space-y-2">
                Nee Partha.. (Moonu)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">
                  Anirudh Ravichander
                </p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2 ">
              <img src={I} />
              <p className="font-semibold text-base space-y-2">
                Mersalayiten (I)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">A.R.Rahman</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={Sarkar} />
              <p className="font-semibold text-base space-y-2">
                Top Tucker (Sarkar)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">Vidhyasagar</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={NineSix} />
              <p className="font-semibold text-base space-y-2">
                Thaabangaale (96)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">A.R.Rahman</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={Three} />
              <p className="font-semibold text-base space-y-2">
                Nee Partha.. (Moonu)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">
                  Anirudh Ravichander
                </p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={Sarkar} />
              <p className="font-semibold text-base space-y-2">
                CEO Intro Bgm (Sarkar)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">
                  Santhosh Narayanan
                </p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3  ">
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2 ">
              <img src={Sarkar} />

              <p className="font-semibold text-base space-y-2">
                Top Tucker (Sarkar)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">Vidhyasagar</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2 ">
              <img src={I} />
              <p className="font-semibold text-base space-y-2">
                Mersalayiten (I)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">A.R.Rahman</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={NineSix} />
              <p className="font-semibold text-base space-y-2">
                Thaabangaale (96)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">A.R.Rahman</p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>

          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={Sarkar} />
              <p className="font-semibold text-base space-y-2">
                CEO Intro Bgm (Sarkar)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">
                  Santhosh Narayanan
                </p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded p-4 flex-grow group hover:bg-gray-500 cursor-pointer bg-gray-700">
            <div className="space-y-2">
              <img src={Three} />
              <p className="font-semibold text-base space-y-2">
                Nee Partha.. (Moonu)
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm text-gray-300">
                  Anirudh Ravichander
                </p>
                <button className="flex w-[15%] opacity-0 group-hover:opacity-100 ">
                  <PlayCircleFilledWhiteIcon className="text-green-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
