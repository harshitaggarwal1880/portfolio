import React, { useEffect, useRef, useState } from "react";
import Mac from "../Components/Mac";
import Iframe from "react-iframe";
import { BiSupport } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
// import Chat from "../Components/Chat";
import { useDispatch, useSelector } from "react-redux";
import UserModal from "../Components/UserModal";
import Chat from "../Components/Chat";

const Test = () => {
  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.user);

  const { name } = userstate;

  // useEffect(() => {
    console.log(name);
  // }, []);

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

  return (
    <Mac>
      <div className=" bg-white overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        neque veniam cumque voluptatem corporis hic nostrum, molestias explicabo
        assumenda commodi, aut non molestiae rerum, nulla voluptate delectus on
        repellendus explicabo illum similique aspernatur.
        <button
          className="flex items-center gap-2 md:gap-4 border-[5px] p-[0.7rem] rounded-[1rem]"
          onClick={() => setModal(!modal)}
        >
          <BiSupport className="support_icon text-[2rem]" />
          <h2 className="hidden md:block text-[18px] font-medium text-[#0F4770]">
            Support
          </h2>
          {/* <img className="w-[2.5rem] md:w-auto" src={avatar} alt="" /> */}
          {/* <img src={dots} alt="" /> */}
        </button>


        <UserModal/>

        
        <Chat/>


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
                onClick={() => setModal(!modal)}
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
        {/* <Chat/> */}
      </div>
    </Mac>
  );
};

export default Test;
