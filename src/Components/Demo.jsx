import React, { useState, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Avatar from "../assets/images/new avatar.png";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import I from "../assets/images/I.jpg";
import Three from "../assets/images/three.jpg";
import Sarkar from "../assets/images/Sarkar.jpg";
import NineSix from "../assets/images/Nine.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Link, Navigate } from "react-router-dom";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import BigCard from "./BigCard";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import Cards from "./Cards";

export default function Demo() {
  // const [value, setValue] = useState(45);
  // const [volumeValue, setVolumeValue] = useState(20);
  const [iconColor, setIconColor] = useState("initialColor");
  const [greeting, setGreeting] = useState("Good Morning");

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 16) {
        setGreeting("Good Afternoon");
      } else if (currentHour >= 16 && currentHour < 19) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    };

    // Update greeting when the component mounts
    updateGreeting();

    // Update greeting every minute to account for time changes
    const intervalId = setInterval(updateGreeting, 60000);

    // Clean up interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // const handleChange = (e, newValue) => {
  //   setValue(newValue);
  // };

  // const handleVolumeChange = (e, newValue) => {
  //   setVolumeValue(newValue);
  // };

  const icon = {
    height: "20px",
    width: "20px",
    cursor: "pointer",
  };

  const sliderStyles = {
    width: "500px",
    color: "white",
  };

  const handlePageChange = (e) => {
    console.log("Here is our playlist");
  };

  const handleHeartClick = () => {
    setIconColor((prevColor) => (prevColor === "red" ? "initialColor" : "red"));
  };

  return (
    <>
      <div className="h-[100%] w-full  bg-black ">
        <div className="h-[86%] fixed top-0 left-0 w-[25%] text-white bg-black">
          <div className="flex-col space-y-4 w-full h-full p-3">
            <div className=" bg-gray-900  rounded-xl font-medium  space-y-4 p-4 text-gray-300 text-sm  ">
              <div className="hover:text-customGreen cursor-pointer flex space-x-4  ">
                <HomeIcon style={icon} />
                <p>Home</p>
              </div>

              <div className=" hover:text-customGreen cursor-pointer flex space-x-4 ">
                <SearchIcon style={icon} />
                <p>Search</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl h-full">
              <div className="flex text-gray-300 justify-between text-sm p-4">
                <div className="flex hover:text-customGreen cursor-pointer space-x-4 font-medium ">
                  <LibraryBooksIcon style={icon} />
                  <p>Your Library</p>
                </div>

                <div className="flex space-x-3">
                  <AddIcon
                    className="hover:text-customGreen cursor-pointer"
                    style={icon}
                  />
                  <ArrowForwardIcon
                    className="hover:text-customGreen cursor-pointer"
                    style={icon}
                  />
                </div>
              </div>

              {/*Link*/}
              <div className=" ml-2 ">
                <Link to={`/maincontent`}>
                  <div className="p-2.5 w-24 hover:text-customGreen text-gray-300 cursor-pointer text-center hover:bg-gray-700 text-sm font-normal rounded-xl ">
                    Playlists
                  </div>
                </Link>
              </div>
              {/*Link*/}

              <div className="flex p-3.5  justify-between text-center font-normal text-sm text-gray-300 ">
                <div className=" flex hover:text-customGreen">
                  <SearchIcon style={icon} />
                </div>

                <div className="flex gap-2 justify-center">
                  Recents
                  <FormatListBulletedIcon
                    className=" hover:text-customGreen"
                    sx={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              <div
                className="hover:bg-gray-700  p-2 m-2 rounded cursor-pointer"
                onClick={handlePageChange}
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={Avatar}
                    style={{
                      width: "50px",
                      borderRadius: "4px",
                      height: "50px",
                    }}
                  />
                  <div className="flex flex-col space-y-1 font-medium  text-gray-300 text-sm ">
                    <p className=" text-customGreen ">My Playlist #1</p>
                    <p className="text-center flex justify-center items-center hover:text-white font-medium">
                      <marquee>Playlist of Elangamani E</marquee>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[14%] fixed top-0 z-20 right-0 w-[75.9%] p-3  text-white bg-black">
          <div className="flex p-4 space-x-2 justify-between items-center h-[88%] rounded-xl w-full bg-gray-900 ">
            <div className="flex items-center gap-3 cursor-pointer">
              <ArrowCircleLeftRoundedIcon />
              <ArrowCircleRightRoundedIcon />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex p-2.5 gap-1 w-30 hover:text-white text-gray-300 cursor-pointer text-center hover:bg-green-700 text-sm font-normal rounded-xl">
                <div className="flex ">
                  <ArrowCircleDownIcon sx={{ width: "20px", height: "20px" }} />
                </div>
                <a href="/">Install App</a>
              </div>
              <CircleNotificationsIcon className="bell-animation" />
              <AccountCircleIcon style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <div className="h-full ml-[25%] w-[74%] mt-[6%] text-white bg-black">
          <div className="bg-gray-900 h-full space-y-5 rounded-xl p-3">
            <div className="font-bold text-2xl w-full hover:text-customGreen  hover:shadow-xl shadow-slate-300 cursor-pointer ">
              {greeting} Cheif !
            </div>

            {/*Card*/}
            <div>
              <Cards />
            </div>
            {/*Card*/}

            {/*BigCard Text*/}
            <div className="flex pt-5 justify-between">
              <p className="text-xl font-bold hover:text-customGreen cursor-pointer">
                Jump Back in
              </p>
              <p className="text-sm font-medium text-gray-300 hover:text-customGreen cursor-pointer">
                Show All
              </p>
            </div>
            {/*BigCard Text*/}
            <BigCard />
          </div>
        </div>

        <div className="h-[16%] fixed bottom-0 w-full text-white bg-black">
          <div className=" flex items-center p-6 h-full justify-between ">
            <div className="flex items-center space-x-2 h-full">
              <img
                src={Three}
                style={{
                  width: "55px",
                  borderRadius: "4px",
                  height: "55px",
                }}
              />
              <div className="flex items-center space-y-0.8 text-gray-300">
                <div className="flex flex-col">
                  <p className=" text-white font-medium text-sm ">
                    Nee Paartha Vizhigal (Moonu)
                  </p>
                  <p className="text-center w-19 flex text-gray-500 font-normal text-ellipsis text-hidden text-xs">
                    Anirudh Ravichander,Dhanush,Shruthi Haassan...
                  </p>
                </div>
                <FavoriteIcon
                  onClick={handleHeartClick}
                  sx={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    fill: iconColor,
                  }}
                />
              </div>
            </div>
            {/*Player*/}
            <div className="text-white flex h-full ">
              <div className="flex items-center">
                <div className="space-y-2">
                  <div className="flex justify-center space-x-5 ">
                    <ShuffleIcon sx={{ width: "24px", height: "22px" }} />
                    <SkipNextRoundedIcon />
                    <PlayCircleFilledWhiteRoundedIcon
                      sx={{ width: "30px", height: "30px" }}
                    />
                    <SkipPreviousRoundedIcon />
                    <ClosedCaptionOffIcon />
                  </div>

                  <div>
                    <input
                      type="range"
                      class="w-[420px] h-1.1 accent-white hover:accent-customGreen cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*Player*/}
            <div className="text-white flex items-center h-full ">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-3">
                  <SubscriptionsIcon sx={{ width: "19px" }} />
                  <QueueMusicIcon sx={{ width: "19px" }} />
                  <DevicesOtherIcon sx={{ width: "19px" }} />
                </div>

                <div className="flex items-center space-x-3">
                  <VolumeUp sx={{ width: "21px" }} />
                  <input
                    type="range"
                    class="w-[100px] h-1.5  accent-white hover:accent-customGreen cursor-pointer"
                  />
                  {/* onChange={handleVolumeChange} */}
                </div>
              </div>
            </div>
          </div>

          {/*End*/}
        </div>
      </div>
    </>
  );
}
