import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>DEMTECH AI</h1>
        <h2>Web, Software development and many more...</h2>
        <h4>
        we Carryout Information Technology Services <br/>
        we Deals On Installation And Setups Of Digital And Internet Infrastructure.<br/>
        we Supplies Of Electrical Electronics Equipment And It's Installation Components<br/>
        we Carryout Software And Web Development 
          <br/> Try it out our AI App
        </h4>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "demian"
                  ? "/human1.jpeg"
                  : typingStatus === "yinka"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "demian:We develop web applications",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We develop softwares",
                2000,
                () => {
                  setTypingStatus("richard");
                },
                "yinka:We carryout ICT installations",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We sell electrical equipments",
                2000,
                () => {
                  setTypingStatus("demian");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
