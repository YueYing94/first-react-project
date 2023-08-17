import React from "react";
import User from "../components/User";
import { useState } from "react";

export const About = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
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
    </div>
  );
};

export default About;
