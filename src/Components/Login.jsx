import React, { useState } from "react";
import loginImg from "../assets/images/spot.webp";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [logging, setLogging] = useState(false);

  const handleLogin = () => {
    if (email === "elango@gmail.com" && password === "1234") {
      localStorage.setItem("token", "1234");
      localStorage.setItem("email", "admin@icanio.com");
      localStorage.setItem("role", "admin");
      setLogging(true);
    } else {
      alert("Invalid email or password. Please Check Again!");
    }
  };

  return (
    <div>
      <div className="w-[100%] flex h-screen">
        <div className="w-[50%] h-screen">
          <img className="w-[100%] h-screen" src={loginImg} alt="Image" />
        </div>

        <div className="w-[50%] bg-black flex justify-center h-screen">
          <div className="text-white space-y-12 flex justify-center items-center flex-col ">
            <h1 class="text-2xl font-extrabold  text-white md:text-5xl lg:text-4xl">
              Login
            </h1>
            <div className="flex items-center space-x-28">
              <label className="font-bold text-lg">Email Id </label>
              <input
                type="textbox"
                className=" p-1.5 font-normal text-base text-black border-black rounded"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-28">
              <label className="font-bold text-lg">Password </label>
              <input
                type="password"
                className=" p-1.5 text-black font-normal text-base border-black rounded"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              {logging ? (
                <Link to="/home">
                  <button className="cursor-pointer text-lg font-medium bg-green-600 rounded-lg p-2">
                    Continue to Home
                  </button>
                </Link>
              ) : (
                <button
                  className="hover:cursor-pointer text-lg font-medium bg-green-600 rounded-lg p-2"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
