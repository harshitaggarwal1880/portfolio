import React from "react";
import Mac from "../Components/Mac";
import { GrSend } from "react-icons/gr";
import SocialIcons from "../Components/SocialIcons";
import { RxCross2 } from "react-icons/rx";

const Contact = () => {
  return (
    <Mac>
      <div className="h-full p-4 px-8 grid grid-cols-[50%_50%] justify-center items-center bg-[#121733] text-white">
        <div className="flex flex-col gap-4">
          <div className="font-bold p-4">
            <div className="text-[4vw]">Get In Touch</div>
            <div className="text-[2vw] text-yellow-400"> Feel free to contact me...</div>
          </div>
          {/*           
          <div className="font-bold p-4">
            <div>Feel free to contact</div>
          </div> */}

          <div>
            <SocialIcons />
          </div>

          {/* <div>
            <div className="w-fit bg-orange-200 text-black border-black font-bold border-2 p-1 ml-3 px-2 rounded-ss-lg rounded-se-lg">
              Contact on email:
            </div>
            <div className="w-fit p-2 bg-orange-300 border-black border-4 rounded-[1rem] text-black shadow-[3px_3px_#000] font-extrabold text-[1.2rem]">
              virtualharshit@gmail.com
            </div>
          </div> */}
        </div>
        <div className="p-4">
          <div className="max-w-[400px] flex flex-col gap-4 p-4 px-8 rounded-2xl shadow-[6px_6px_#000] border-4  text-white">
             <div className="font-bold text-lg">
              <div className="text-[1.5rem]">Contact</div>
              {/* <div className="text-[1.5rem]"><RxCross2 /></div> */}
              {/* <div className="">If </div> */}
             </div> 
            <form className="max-w-[300px] flex flex-col items-center gap-3  ">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  className="border-black border-2 rounded-md shadow-[3px_3px_#000] p-2 text-black"
                  type="text"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="name" className="font-bold">
                  Email
                </label>
                <input
                  className="border-black border-2 rounded-md shadow-[3px_3px_#000] p-2  text-black"
                  type="text"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="name" className="font-bold">
                  Message
                </label>
                <textarea
                  className="border-black border-2 rounded-md shadow-[3px_3px_#000] p-2  text-black"
                  name=""
                  id="message"
                  cols="20"
                  rows="3"
                ></textarea>
              </div>

              <button className="w-1/2 flex justify-center items-center gap-2 font-bold px-3 py-1 mt-2 bg-white text-black border-black border-4 rounded-[0.5rem] shadow-[3px_3px_#000000] focus:bg-slate-400 hover:bg-red-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]  ">
                Send
                <GrSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Mac>
  );
};

export default Contact;
