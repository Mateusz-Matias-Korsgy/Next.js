import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import "./Chatbox.css";
import jamesPhoto from "../assets/jamesPhoto.svg";
import angelinaPhoto from "../assets/angelinaPhoto.svg";
import buttonIcon from "../assets/buttonIcon.svg";

const Chatbox = () => {
  let [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  messages = [
    {
      type: "me",
      name: "Angelina",
      photo: "",
      message:
        "This is me sending a demo message wkenwekn rw  lej     lwef jkne   nerk    jnelj   ",
      time: new Date().toLocaleString(),
    },
    {
      type: "other",
      name: "James",
      photo: "",
      message: `This is you sending a demo message ${(
        <br />
      )} it is nice beign here`,
      time: new Date().toLocaleString(),
    },
    {
      type: "me",
      name: "Angelina",
      photo: "",
      message:
        "This is me sending a demo message wkenwekn rw  lej     lwef jkne   nerk    jnelj   ",
      time: new Date().toLocaleString(),
    },
  ];

  const baseUrl = "http://localhost:4000/chat/messages";
  const nameUser = localStorage.getItem("userName");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: nameUser,
        message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      }),
    });
    setMessage("");
  };

  useEffect(() => {
    const pusher = new Pusher("da35e17972c883cd9163", {
      cluster: "eu",
      encrypted: true,
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind();
      pusher.disconnect();
    };
  }, [messages]);

  //backend
  // const Pusher = require("pusher");

  // const pusher = new Pusher({
  //     appId: "1547021",
  //     key: "da35e17972c883cd9163",
  //     secret: "876f761e77c1ab83a41f",
  //     cluster: "eu",
  //     useTLS: true
  // });

  // pusher.trigger("my-channel", "my-event", {
  //     message: "hello world"
  // });

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridian = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedTime = hours + ":" + minutes + " " + meridian;

  return (
    <div className=" z-10  fixed sm:full-w md:w-1/3 right-10 bottom-10 flex flex-col overflow-y-scroll   bg-black h-[600px] w-[513px] ">
      <div className="bgCustomRgba flex flex-row inset-x-0 bottom-0 p-4 text-white  border-bgCustomRgba-600 rounded-t-lg text-xl font-small">
        <img
          src={angelinaPhoto}
          alt="Other's Avatar"
          className="rounded-full ml-3 pr-4 w-62 h-62"
        />
        <p className="flex items-center">{messages[0].name}</p>
      </div>
      <div className="flex-1 bg-white overflow-y-scroll ">
        <div className="text-sl font-small fixed absolute w-full pt-3 textColor mb-2 flex justify-center">{`TODAY, ${formattedTime}`}</div>
        {messages.map((message, index) => (
          <div key={index} className="flex pt-14 pl-3">
            {message.type === "other" && (
              <div className="flex flex-col justify-end">
                <div className="flex flex-row justify-end">
                  <p className="flex items-end">{message.name}</p>
                  <img
                    src={jamesPhoto}
                    alt="Other's Avatar"
                    className="rounded-full ml-3 pr-4 w-62 h-62"
                  />
                </div>

                <div className="p-4 flex  p-2 flex-row justify-start">
                  <div className="bgMessage textColor leading-[50px] flex ml-10  p-2 rounded-lg">
                    {message.message}
                  </div>
                  <div className="w-20"></div>
                </div>
                <div className="text-xs textColor mb-10 font-small ml-12">
                  {message.time}
                </div>
              </div>
            )}
            {message.type === "me" && (
              <div className="flex flex-col ">
                <div className="flex flex-row justify-start">
                  <img
                    src={angelinaPhoto}
                    alt="my Avatar"
                    className="rounded-full  pr-4 w-62 h-62"
                  />
                  <p className="flex items-end">{message.name}</p>
                </div>

                <div className="p-4 flex  p-2 flex-row justify-start">
                  <div className="w-20"></div>
                  <div className="bgMessage textColor  leading-[50px] flex mr-10  p-2 rounded-lg">
                    {message.message}
                  </div>
                </div>
                <div className="text-xs textColor font-small mb-10 flex justify-end mr-12">
                  {message.time}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="static flex flex-row justify-between gap-5 inset-x-0 bottom-0 p-4 text-black   rounded-b-lg text-xl font-small bg-white">
        <input
          type="text"
          className="chatInputStyle w-full "
          placeholder={` Reply to ${messages[0].name}...`}
          onChange={handleChange}
        />

        <button className="btnStyle flex items-center" onClick={handleSubmit}>
          {<img src={buttonIcon} />}
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
