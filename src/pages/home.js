import Greet from "../components/Greet";
import Welcome from "../components/Welcome";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Home page for {username} </h1>
      <Welcome />
      <Greet />
    </div>
  );
};
