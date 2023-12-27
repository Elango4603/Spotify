import React from "react";
import Ads from "../assets/images/ads.png";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const handleClick = () => {
  <Link to={`/home`} />;
};

const MainContent = () => {
  return (
    <div>
      <div className=" bg-green-600 h-screen flex flex-col justify-center p-3 items-center space-y-7">
        <div className="font-bold text-4xl">Its a Collection Of Playlist</div>
        <Link to={`/home`}>
          <button
            className=" hover:bg-gray-200 flex gap-2.5 text-green-900 text-base font-medium rounded-xl p-4"
            onClick={handleClick}
          >
            GO TO HOME
            <img
              src={logo}
              style={{ width: "23px", height: "23px", objectFit: "cover" }}
              alt="Logo"
            />
          </button>
        </Link>
        <img
          src={Ads}
          style={{
            width: "90vw",
            borderRadius: "20px",
            height: "60vh",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default MainContent;
