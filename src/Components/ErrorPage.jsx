import { Grid } from "@mui/material";
import React from "react";
import Error from "../assets/images/ennama.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex bg-green-500 space-y-8 w-[100vw] h-[100vh] flex-col items-center justify-center ">
        <span className="text-4xl font-bold"> 404 ERROR ! </span>
        <div className="justify-center zoomInImage flex flex-col">
          {/* <marquee> */}
          <img
            src={Error}
            style={{ width: "300px", height: "310px", objectFit: "cover" }}
            alt="ErrorPagerror"
          />
          {/* </marquee> */}
        </div>
        <span className="flex flex-col items-center space-y-4">
          <p className="font-medium flex text-2xl leading-12">
            Ennama Neenga Ipdi Panreengalae Ma !
          </p>
          <p className="font-medium flex text-sm text-gray-900">
            Correct aana address type pannnunga ma !!
          </p>

          <div>
            <Link to={`/`}>
              <button className="bg-black flex  hover: text-green-600 cursor-pointer p-3 rounded-xl">
                {" "}
                GO TO HOME
                <img
                  src={logo}
                  style={{ width: "22px", height: "22px", objectFit: "cover" }}
                  alt="Logo"
                />
              </button>
            </Link>
          </div>
        </span>
      </div>
    </>
  );
};

export default ErrorPage;
