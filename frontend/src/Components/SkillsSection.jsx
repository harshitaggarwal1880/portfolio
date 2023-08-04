import React from "react";
import SkillsLogo from "./SkillsLogo";
import Skills from "./Skills";

const SkillsSection = () => {
  return (
    <div className="h-[85vh] bg-[#121733] text-white">
      <div>Skills</div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl w-fit p-4 px-8 font-bold text-[2vw] uppercase border-5 border-white bg-lime-400 shadow-[3px_3px_#ffffff] text-black">
          Website Development
        </div>
        <div>MERN Stack Development</div>
      </div>

      <div>
        <SkillsLogo />
      </div>
    </div>
  );
};

export default SkillsSection;
