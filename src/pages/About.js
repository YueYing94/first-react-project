import React from "react";
import User from "../components/User";
import { useState } from "react";
import { ChangeAbout } from "../components/ChangeAbout";
import { useContext } from "react";
import { AppContext } from "../App";

export const About = () => {
  const { username } = useContext(AppContext);
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h1>About page for {username} </h1>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        About Me
      </button>

      {showText && (
        <User
          address="Rotterdam, the Netherlands"
          email="sarahyingyue1994@gmail.com"
          github="https://github.com/YueYing94"
          linkedin="https://www.linkedin.com/in/yueying94/"
        />
      )}

      <ChangeAbout />
    </div>
  );
};

export default About;
