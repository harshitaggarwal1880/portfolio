import axios from "axios";
import React, { useRef, useState } from "react";
import { GrSend } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setId, setName } from "../store/slice/userSlice";
import AllComments from "./AllComments";
import { v4 as uuid } from 'uuid';

const Comments = ({ details, setdetails }) => {
  const [name, setname] = useState("");

  const [comment, setcomment] = useState("");

  const [showname, setshowname] = useState(false);

  const { id } = useParams();

  const commentref = useRef(null);

  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.user);

  // const { name } = userstate;
  console.log(userstate);

  const namehandle = (e) => {
    e.preventDefault();
    const unique_id = uuid();

    dispatch(setName(name));
    dispatch(setId(unique_id));

    localStorage.setItem("user",JSON.stringify({ name: name, id: unique_id}))


  };

  const sendcomment = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND}/api/p/update/${id}`,
      {
        comments: [
          {
            name: userstate.name,
            userid: userstate.id,
            comment: comment,
          },
          ...details.comments,
        ],
      }
    );

    console.log(data);

    setcomment("");
    setdetails(data.project);
  };



  return (
    <div className="flex flex-col gap-4">
      {userstate.name ? (
        <>
          <div className="text-lg font-bold">Comment..</div>
          <form onSubmit={sendcomment}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              value={comment}
              placeholder="message sonething..."
              className="w-full border-black border-2 rounded-md shadow-[3px_3px_#000] p-2  text-black"
              onChange={(e) => setcomment(e.target.value)}
            ></textarea>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] "
              >
                Send
                <GrSend />
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-bold">
            Please Enter your Name to comment
          </div>
          <form onSubmit={namehandle} className="flex gap-2">
            <input
              type="text"
              className="border-black border-2 rounded-md shadow-[3px_3px_#000] p-2  text-black"
              onChange={(e)=> setname(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center gap-2 font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] "
            >
              Submit
            </button>
          </form>
        </div>
      )}

      
      {/* <AllComments details={details} /> */}

    </div>
  );
};

export default Comments;
