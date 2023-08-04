import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { styled } from "styled-components";
import { BiLogoPython, BiLogoReact, BiSearchAlt } from "react-icons/bi";
import TopBar from "../Components/TopBar";
import Typewriter from "typewriter-effect";
import Card from "../Components/Card";
import Mac from "../Components/Mac";
import ProjectCard from "../Components/ProjectCard";
import Preview from "../Components/Preview";
import { MdWeb } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import Iframe from "react-iframe";

const Projects = () => {
  const [projects, setprojects] = useState([]);

  const modalRef = useRef();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const fetchprojects = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND}/api/p/projects`
    );

    console.log(data);

    setprojects(data.projects);
  };

  useEffect(() => {
    fetchprojects();
  }, []);

  const previewclick = (e) => {
    e.stopPropagation();

    setModal(!modal);
  };

  return (
    // {/* <div className="h-screen w-screen bg-gradient-to-b from-[#ff4735] to-[#e481b1] flex flex-col justify-center items-center overflow-hidden"> */}
    <Mac>
      <div className="w-full h-full grid grid-cols-[20%_80%]  bg-[#121733] text-white">
        <div className="font-bold p-4 flex flex-col gap-2 bg-[#0b0e20]">
          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 p-2 hover:bg-black rounded-lg ">
                <svg className="w-[1rem]" viewBox="0 0 512 512">
                  <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path
                      d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                      data-original="#bfc9d1"
                    />
                  </g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M192 192h128v128H192zm0 0"
                    fill="currentColor"
                    data-original="#82b1ff"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                    fill="currentColor"
                    data-original="#bfc9d1"
                  />
                </svg>
                Home
              </li>
              <li className="flex items-center gap-2 p-2 hover:bg-black rounded-lg ">
                <svg
                  className="w-[1rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-grid"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                </svg>
                Most Liked
              </li>
            </ul>
          </div>

          <div className="text-slate-400">Categories</div>
          <div className="py-2">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 p-2 hover:bg-black rounded-lg ">
                <MdWeb />
                Web
              </li>
              <li className="flex items-center gap-2 p-2 hover:bg-black rounded-lg">
                <BiLogoPython />
                Python
              </li>
              <li className="flex items-center gap-2 p-2 hover:bg-black rounded-lg">
                <BiLogoReact />
                React
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 h-[80vh] flex flex-col gap-8 overflow-y-scroll">
          <div className="text-[3vw] font-bold px-4 ">All Projects</div>
          <div className="grid grid-cols-3 justify-center items-center flex-wrap gap-4 gap-y-8">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  title={project.title}
                  image={project.topImage.url}
                  id={project._id}
                  key={index}
                  previewclick={previewclick}
                />
              );
            })}
          </div>
        </div>

        <div
          className={`flex justify-center items-center bg-[#000000d4] h-screen w-screen fixed top-[0%] left-[0%] ${
            modal ? "block" : "hidden"
          }`}
        >
          <div
            ref={modalRef}
            className={`h-[100vh] bg-white w-[70vw] fixed grid grid-rows-[5%_95%] border-2 border-black border-t-0 border-b-0 shadow-[0_0_20px_0_#fff]`}
          >
            <div className="grid grid-cols-[95%_5%] items-center justify-center bg-orange-400 font-bold">
              <div className="text-center">Preview</div>
              <button
                className="flex justify-center items-center h-full bg-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  setModal(!modal);
                }}
              >
                {" "}
                <RxCross2 />
              </button>
            </div>
            <div>
              <Iframe
                url="https://www.fiverr.com/sheharyar__/do-mern-stack-website-as-mern-stack-developer-node-react-mongodb-express?context_referrer=logged_in_homepage&source=by_recently_viewed&ref_ctx_id=2c34d77e5edcefd1df36fcaf68196591&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&imp_id=ed0d647c-29e2-406b-90f3-867d80529add"
                width="100%"
                height="100%"
                id=""
                className=""
                display="block"
                position="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </Mac>
  );
};

export default Projects;
