import Greet from "../components/Greet";
import Api from "../components/Api";
import Movie from "../components/Movie";
import Welcome from "../components/Welcome";

export const Home = () => {
  return (
    <div>
      <h1>THIS IS THE HOME PAGE</h1>
      <Welcome />
      <Greet />
      <Api />
      <Movie />
    </div>
  );
};
