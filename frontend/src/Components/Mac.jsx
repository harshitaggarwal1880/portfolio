import React, { Children } from "react";
import HeaderSide from "./HeaderSide";
import Social from "./Social";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";
import { styled } from "styled-components";

const Mac = ({ children }) => {
  const navigate = useNavigate();

  //   const history = useHistory();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoForward = () => {
    navigate(1);
  };

  const isBackActionAvailable = () => {
    return window.history.length > 1;
  };

  const isForwardActionAvailable = () => {
    return window.history.length - window.history.currentIndex > 1;
  };

  //   const isBackActionAvailable = () => {
  //     return history && history.action === "POP";
  //   };

  // Function to check if the forward action is available
  //   const isForwardActionAvailable = () => {
  //     return history && history.action === "PUSH";
  //   };

  // console.log(isBackActionAvailable, isForwardActionAvailable);
  // console.log(window.history.length);
  // console.log(window.history);

  return (
    <MacStyle>
      <div className="h-screen flex justify-center items-center font-bold text-[4vw] md:hidden">Not Available for Mobile, Tablet. Working... </div>
      
      <div className="hidden h-screen w-screen overflow-hidden bg-gradient-to-b from-[#ff4735] to-[#e481b1] md:flex flex-col items-center">
        
        <TopBar />
        
    
        <div className="h-[90%] w-[85%] grid grid-rows-[8%_90%] rounded-[1rem] border-black border-4 shadow-[5px_7px__#000000] relative top-[5%]">
          <div className="bg-slate-800 rounded-ss-[0.6rem] rounded-se-[0.6rem] flex items-center justify-between px-4 ">
            <div className="flex gap-2 w-1/5">
              <div className="flex gap-1 items-center">
                <div className="bg-red-400 h-[15px] w-[15px] rounded-full"></div>
                <div className="bg-yellow-400 h-[15px] w-[15px] rounded-full"></div>
                <div className="bg-green-400 h-[15px] w-[15px] rounded-full"></div>
              </div>
              <div
                className={`bg-slate-600 px-2 py-[2px] text-base rounded-[0.2rem] ${
                  isBackActionAvailable ? "text-white" : ""
                }`}
                onClick={handleGoBack}
              >
                <IoChevronBackOutline />
              </div>
              <div
                className={`bg-slate-600 px-2 py-[2px] text-base rounded-[0.2rem] ${
                  isForwardActionAvailable ? "text-white" : ""
                }`}
                onClick={handleGoForward}
              >
                <IoChevronForwardOutline />
              </div>
            </div>
            {/* <div className="text-white w-1/5 text-center"> Leftyharsh </div> */}
            {/* <div className="flex items-center w-1/2 relative text-white">
              <input
                type="text"
                placeholder="Search"
                className="bg-slate-600 p-1 w-full text-center rounded-[0.25rem] placeholder:text-center"
              />
              <div className="absolute p-1 px-4 bg-indigo-900 right-2 bottom-1 rounded-lg shadow-[3px_3px_#000000] transform active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]  ">
                <BiSearchAlt />
              </div>
            </div> */}

            <div className="text-white w-1/5 flex items-center justify-end gap-4">
              <div>
                <RxCross2 />{" "}
              </div>
            </div>
          </div>

          {/* <div className="h-[90%] grid grid-cols-2 justify-center items-center bg-[#121733] text-white"> */}
          {children}
          {/* </div> */}
        </div>
        {/* <Preview /> */}
      </div>
    </MacStyle>
  );
};

const MacStyle = styled.div`
  // /* ===== Scrollbar CSS ===== */

  // /* Firefox */
  * {
    scrollbar-width: 10px;
    scrollbar-color: #490c9a;
  }

  // /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #121733;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #490c9a;
    border-radius: 10px;
    border: 1px solid #ffffff;
  }
`;
export default Mac;
