import React from "react";
import Projectss from "../Images/projectss.png";
import { Link } from "react-router-dom";

const BlogCard = ({ title, desc, image, date, id }) => {

  const format_date = new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

  return (
    // bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
    <Link to={`/blog/${id}`}>
      <div className="h-fit flex flex-col rounded-md shadow-[0px_0px_10px_0px_#000000] hover:scale-[1.05] duration-300 ">
        <div className=" bg-cyan-300 text-black rounded-ss-md rounded-se-md flex items-center justify-between px-4 py-1 ">
          <div className="text-xs font-bold">{format_date}</div>
          <div className="flex gap-1 items-center">
            <div className="bg-red-400 h-[10px] w-[10px] rounded-full border-black border-2 "></div>
            <div className="bg-yellow-400 h-[10px] w-[10px] rounded-full border-black border-2"></div>
            <div className="bg-green-400 h-[10px] w-[10px] rounded-full border-black border-2"></div>
          </div>
        </div>

        <div className="flex flex-col border-black bg-white text-black rounded-es-[0.6rem] rounded-ee-[0.6rem] ">
          <img src={image} alt="" className="w-[100%]" />
          <div className="p-2">
            <div className="font-extrabold text-lg"> {title}</div>
            <div className="font-bold text-[0.8rem]">
              {desc}
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between bg-white text-[1rem] p-2 text-black rounded-es-[0.6rem] rounded-ee-[0.6rem]">
        <div className="flex justify-center items-center gap-2 font-bold text-sm ">
          <div>2 March, 2023</div>
        </div>
        <Link
          to="/blog/3"
          className=" font-bold px-3 py-1 bg-white border-black border-4 rounded-[0.5rem] shadow-[3px_3px_#000000] focus:bg-slate-400 hover:bg-red-400 transform active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] "
        >
          
          Show More
        </Link>
      </div> */}
      </div>
    </Link>
  );
};

export default BlogCard;
