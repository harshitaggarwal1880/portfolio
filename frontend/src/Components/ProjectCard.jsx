import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Projectss from "../Images/projectss.png";
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import Iframe from "react-iframe";
import { Link, useNavigate } from "react-router-dom";
const ProjectCard = ({title, image, id, previewclick}) => {



  const navigate = useNavigate();

  return (
    <>
      <div onClick={()=> navigate(`/project/${id}`) } className="h-full bg-white flex flex-col justify-between border-2 border-black rounded-[0.6rem] shadow-0px_0px_10px_0px_#000000] hover:scale-[1.05] duration-300  shadow-[4px_4px_#000000]">
        <div className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black rounded-ss-[0.5rem] rounded-se-[0.5rem] flex items-center justify-between px-4 py-1  ">
          {/* <div className="font-bold"> Mern Stack Project Title </div> */}
          <div></div>
          <div className="flex justify-end gap-2">
            <div className="flex gap-1 items-center">
              <div className="bg-red-400 h-[10px] w-[10px] rounded-full border-black border-2 "></div>
              <div className="bg-yellow-400 h-[10px] w-[10px] rounded-full border-black border-2"></div>
              <div className="bg-green-400 h-[10px] w-[10px] rounded-full border-black border-2"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-black bg-white p-1 text-black  ">
          <img src={image} alt="" className="rounded-md w-[100%]" />
          <div className="font-extrabold px-2 text-lg">{title}</div>
        </div>
        <div className="flex justify-between bg-white text-[1rem] p-2 text-black rounded-es-[0.6rem] rounded-ee-[0.6rem]">
          <button onClick={(e) => previewclick(e)} className="font-bold px-2 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]  ">
            {" "}
            Preview
          </button>
          <Link to={`/project/${id}`} className="font-bold px-2 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]  ">
            {" "}
            Show More
          </Link>
          {/* <button
            onClick={() => {setshow(true)}}
            className=" font-bold px-3 py-1 bg-white border-black border-4 rounded-[0.5rem] shadow-[3px_3px_#000000] focus:bg-slate-400 hover:bg-red-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]"
          >
            {" "}
            Preview
          </button> */}

          
        </div>

        
      </div>
      
    </>
  );
};

export default ProjectCard;
