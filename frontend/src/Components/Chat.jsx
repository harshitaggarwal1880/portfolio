import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { useSocket } from "../contexts/SocketProvider";
// import { getAllMessageRoute, sendMessageRoute } from "../Utils/APIRoutes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { initSocket } from "../config/socket";
// import { Set_Messages } from "../Actions/Actions";

const Chat = () => {
  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.user);

  const { name, id } = userstate;

  const chatemail = "admin";

  //   const chatstate = useSelector((state) => state.ChatReducer);

  // console.log(chatstate);

  //   const { chatname } = chatstate;

  const [menu, setMenu] = useState(false);

  const [msg, setmsg] = useState("");

  const [currentchat, setcurrentchat] = useState({
    email: chatemail,
    username: chatemail,
    avatarImage:
      "data:image/png;base64,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",
  });

  const profileRef = useRef();

  const scrollRef = useRef();

  const socket = useSocket();

  const [arrivalMessage, setarrivalMessage] = useState(null);

  const [messages, setmessages] = useState([
    {
      fromSelf: true,
      message: "Hello",
    },
    {
      fromSelf: false,
      message: "hi",
    },
  ]);

  useEffect(() => {
    // socket.emit("userjoin", email);
    // console.log("Socket : ",socket)
  }, []);

  //   useEffect(() => {
  //     const getallmessages = async () => {
  //       const response = await axios.post(`${process.env.REACT_APP_BACKEND}/message/getallmsg`, {
  //         from: email,
  //         to: chatemail,
  //       });
  //       // dispatch(Set_Messages(response.data));
  //       setmessages(response.data);

  //       // console.log(chatstate);
  //     };
  //     if (currentchat) {
  //       getallmessages();
  //     }
  //   }, [chatemail]);

  useEffect(() => {
    let handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  //   useEffect(() => {
  //     socket.on("recieve_chat", (data) => {
  //       console.log("Msg recieved", data)
  //       setarrivalMessage({
  //         fromSelf: false,
  //         from: data.from,
  //         message: data.message,
  //       });
  //     });

  //   }, [socket]);

  //   useEffect(() => {
  //     if (arrivalMessage && arrivalMessage.from === "admin") {
  //       // dispatch(Set_Messages((prev) => [
  //       //   ...prev,
  //       //   { fromSelf: arrivalMessage.fromSelf, message: arrivalMessage.message },
  //       // ]));
  //       setmessages((prev) => [
  //         ...prev,
  //         { fromSelf: arrivalMessage.fromSelf, message: arrivalMessage.message },
  //       ]);
  //     }
  //   }, [arrivalMessage]);

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setmsg("");
    }
  };

  const handleSendMsg = async (msg) => {
    //     // dispatch(Set_Messages([
    //     //   ...messages,
    //     //   {
    //     //     fromSelf: true,
    //     //     message: msg,
    //     //   },
    //     // ]));
    // setmessages([
    //   ...messages,
    //   {
    //     fromSelf: true,
    //     message: msg,
    //   },
    // ]);
    //     socket.emit("send_chat", {
    //       to: currentchat.email,
    //       from: email,
    //       message: msg,
    //     });
    //     console.log(currentchat.email, email, msg);
    //     // await axios.post(sendMessageRoute, {
    //     //   from: email,
    //     //   to: chatemail,
    //     //   message: msg,
    //     // });
  };

  // useEffect(() => {
  //   console.log(chatemail);

  //   setcurrentchat({
  //     ...currentchat,
  //     email: chatemail,
  //   });
  // }, [chatemail]);

  // const socketRef = useRef(null);

  const connectwithSocket = async () => {
    //   if (socketRef.current?.id) {
    //     socketRef.current.disconnect();
    //   }
    //   socketRef.current = await initSocket();
    socket.emit("join", id);

    console.log(socket);

    //   socketRef.current.on("joined", ({ id }) => {
    //     console.log(id, " Joined a chat ");
    //     // addmessage(user, "Joined")
    //     // console.log(messages);
    //   });

    //   socketRef.current.on("recieve", ({ user, message }) => {
    //     console.log("Chat recieve from ", user, " : ", message);
    //     addmessage(user, message)
    //     console.log(messages);
    //   });

    //   socketRef.current.on("disconnected", ({ user, name }) => {
    //     console.log(`${user} disconnected`);
    //     addmessage(user, "Disconnect")
    //   });
  };

  // const sendmessage = () => {
  //   socketRef.current.emit("send", { user: socketRef.current.id, message });
  //   console.log(message);
  // };
  // const sendrequest = () => {
  //   socketRef.current.emit(
  //     "request",
  //     { user: socketRef.current.id },
  //     (response) => {
  //       console.log(response.status);
  //     }
  //   );
  // console.log(message)
  // };

  useEffect(() => {
    connectwithSocket();
    console.log("App Joined");

  //   return () => {
  //     socketRef?.current?.disconnect();
  //   };
  }, []);

  return (
    <Container>
      <div ref={profileRef} className="profile-container relative">
        <div
          className={`profile-menu h-[90vh] bg-white w-[90vw] md:w-[438px] fixed bottom-[1%] right-[2%] p-4 rounded-[1rem] ${
            menu
              ? "block animate__animated animate__fadeIn animate__fast"
              : "hidden"
          }`}
        >
          <Chatcontainer>
            <div className="chat-header">
              <div className="user-details">
                <div className="avatar">
                  <img src={currentchat.avatarImage} alt="avatar" />
                </div>
                <div className="username">
                  <h3>{currentchat.username}</h3>
                </div>
              </div>
              {/* <Logout /> */}
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => {
                return (
                  // <div ref={scrollRef} key={uuidv4()}>
                  <div ref={scrollRef} key={index}>
                    <div
                      className={`message ${
                        message.fromSelf ? "sended" : "recieved"
                      }`}
                    >
                      <div className="content">
                        <p>{message.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="chatinput">
              <form className="input-container" onSubmit={(e) => sendChat(e)}>
                <input
                  type="text"
                  name="chat"
                  id="chat"
                  placeholder="type your message here"
                  value={msg}
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  autoComplete="off"
                />
                <button type="submit">
                  <IoMdSend className="chat-icon" />
                </button>
              </form>
            </div>
          </Chatcontainer>
        </div>
        <button
          className="profile-trigger flex items-center gap-2 md:gap-4 fixed right-[5%] bottom-[3%] border-[5px] p-[0.7rem] rounded-[1rem]"
          onClick={() => setMenu(!menu)}
        >
          <BiSupport className="support_icon text-[2rem]" />
          <h2 className="hidden md:block text-[18px] font-medium text-[#0F4770]">
            Support
          </h2>
          {/* <img className="w-[2.5rem] md:w-auto" src={avatar} alt="" /> */}
          {/* <img src={dots} alt="" /> */}
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .profile-menu {
    background: white;
    z-index: 100;
    box-shadow: 0 0 20px #383838;
  }
`;

const Chatcontainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  overflow: hidden;
  // padding-top: 1rem;
  .chat-header {
    background-color: #02163b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      // margin-left: 2rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }

  .chat-messages {
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    // height: 83%;
    gap: 1rem;
    overflow: auto;
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 90%;
        overflow-wrap: break-word;
        color: black;
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: 500;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        p {
          margin-bottom: 0;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
        border-bottom-left-radius: 0.5rem;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: rgb(255 188 0 / 67%);
        border-bottom-right-radius: 0.5rem;
      }
    }

    scrollbar-width: thin;
    scrollbar-color: #e3e3e3 transparent;

    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #e3e3e3;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
  }

  .chatinput {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 9px black;
  }

  .input-container {
    display: flex;
    width: 100%;
    border-radius: 2rem;
    align-items: center;
    gap: 1rem;
    background-color: #ffffff38;

    input {
      width: 90%;
      padding: 0.5rem;
      // background-color: transparent;
      color: black;
      // border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.3rem 2rem;
      background-color: #9a86f3;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      .chat-icon {
        font-size: 1.5rem;
        color: white;
      }
    }
  }

  .support_icon {
    font-size: 1.5rem;
  }
`;

export default Chat;
