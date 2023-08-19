import React from "react";
import Api from "../components/Api";
import Movie from "../components/Movie";
import { useContext } from "react";
import { AppContext } from "../App";

export const Funstuff = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Fun stuff from {username} </h1>
      <Api />
      <Movie />
    </div>
  );
};

export default Funstuff;
