import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { styled } from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import TopBar from "../Components/TopBar";
import Typewriter from "typewriter-effect";
import HeaderSide from "../Components/HeaderSide";
import Social from "../Components/Social";
import Mac from "../Components/Mac";
import { ProjectCardStyle } from "./Projects";
import Header from "../Components/Header";
import SkillsSection from "../Components/SkillsSection";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <Mac>
      <div className="h-[85vh] overflow-y-auto">
        {/* <Navbar /> */}
        <Header />
      </div>
    </Mac>
  );
};

export default Home;
