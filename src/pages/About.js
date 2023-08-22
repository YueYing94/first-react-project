import React from "react";
import User from "../components/User";
import { useToggle } from "../components/useToggle";
import { ChangeAbout } from "../components/ChangeAbout";
import { useContext } from "react";
import { AppContext } from "../App";

export const About = () => {
  const { username } = useContext(AppContext);
  const [isVisitble, toggle] = useToggle();

  return (
    <div>
      <h1>About page for {username} </h1>
      <button onClick={toggle}>
        {isVisitble ? "Hide" : "Click to see more about Me"}
      </button>

      {isVisitble && (
        <User
          age={29}
          isAvailable={true}
          address="Rotterdam, the Netherlands"
          email="sarahyingyue1994@gmail.com"
          github="https://github.com/YueYing94"
          linkedin="https://www.linkedin.com/in/yueying94/"
          skills={["JavaScript", "Ruby on Rails", "React", "HTML", "CSS"]}
        />
      )}

      <ChangeAbout />
    </div>
  );
};

export default About;
