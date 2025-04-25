"use client";
import "./MobileLayout.css"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";

const MobileLayout = () => {

  const [isOpen, setIsOpen] = useState(false);
//   const [isClose, setClose] = useState(true);

  let refMenu = useRef();

  useEffect(() => {
    let handler = (event) => {
      if(!refMenu.current.contains(event.target)){
            setIsOpen(false)
        }   
    };

    document.addEventListener("mousedown", handler);
    
     return () => {
        document.removeEventListener("mousedown",handler)
     }
  })

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div >
    <div ref={refMenu} className="MobileLayout">
      <div
        className="mobile"
        onClick={() => setIsOpen((prev) => !prev)}
      >
         <BiMenuAltRight size={30} />
        </div>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="chatLit">
        <span className="title">DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore DEMTECH AI</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className="title">RECENT CHATS</span>
        <div className="list">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data?.map((chat) => (
                <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                  {chat.title}
                </Link>
              ))}
        </div>
        <hr />
        <div className="upgrade">
          <img src="/icon.png" alt="" />
          <div className="texts">
            <span>Upgrade to DEMTECH AI Pro</span>
            <span>Get unlimited access to all features</span>
          </div>
        </div>
      </div>
      )}
    </div>
    </div>
  );
};

export default MobileLayout;
