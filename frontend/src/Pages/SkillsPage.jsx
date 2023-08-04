import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { styled } from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import TopBar from "../Components/TopBar";
import Typewriter from "typewriter-effect";
import Skills from "../Components/Skills";
import Mac from "../Components/Mac";

import html from "../utils/html.png";
import css from "../utils/css.svg";
import js from "../utils/js.png";
import react from "../utils/react.png";
import tailwind from "../utils/tailwind.png";
import express from "../utils/express.png";
import mongo from "../utils/mongo.png";
import python from "../utils/python.png";
import bootstrap from "../utils/bootstrap.png";
import socket from "../utils/socket.png";

const SkillsPage = () => {
  return (
    <Mac>
      <div className="h-full grid justify-center items-center bg-[#121733] text-white">
        <div className="h-[30vh] grid grid-cols-[40%_60%]">
          <div className="flex justify-center items-center text-[4vw] font-bold">
            SKILLS
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center h-[50%] w-[70%] bg-gradient-to-b from-[#ff4735] to-[#e481b1] border-4 border-black rounded-2xl shadow-[3px_3px_#000000]">
              <div className="w-[60%] uppercase p-4 font-bold ">
                Full Stack Development
              </div>
              <div className="reactlogo hover:animate-spin hover:scale-105">
                <img src={react} className="h-[80%]" alt="" />
                {/* <img src={mongo} className="" alt="" />
                <img src={express} className="" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col items-center bg-[#121733]">
          <Skills />
        </div>
      </div>
    </Mac>
  );
};

const MacStyle = styled.div``;

export default SkillsPage;
