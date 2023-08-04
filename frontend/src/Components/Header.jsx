import React from "react";
import HeaderSide from "./HeaderSide";
import Social from "./Social";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className=" h-[85vh] grid grid-cols-[40%_60%] justify-center items-center bg-[#121733] text-white">
      <div className="flex items-center">
        <div className="flex ml-[10%] flex-col gap-2">
          <div className="font-bold text-[4vw]">Hi there,</div>
          <div className="flex gap-2 font-bold text-[3vw]">
            <div>I'm </div>
            <div className="text-yellow-500">Harshit</div>
          </div>
          <div className="flex items-baseline gap-2 mb-4 font-bold">
            {" "}
            <div className="text-[3vw]">I'm</div>
            <div className="uppercase text-red-500 text-[2vw]">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ["Full Stack Developer", "MERN Stack Developer"],
                }}
              />
            </div>
          </div>
          {/* <Social /> */}
        </div>
      </div>
      <div className="p-[4rem]">
        <HeaderSide />
      </div>
    </div>
  );
};

export default Header;
