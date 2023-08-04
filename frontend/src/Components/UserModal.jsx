import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Iframe from "react-iframe";

const UserModal = () => {
  const modalRef = useRef();
  const buttonRef = useRef();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (
        !modalRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="">
      <div ref={buttonRef}>
        <BiSolidUser onClick={(e) => setModal(!modal)} />
      </div>

      <div
        ref={modalRef}
        className={`h-[70vh] bg-white w-[20vw] z-[1000] fixed  top-[105%] border-2 ${
          modal ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default UserModal;
