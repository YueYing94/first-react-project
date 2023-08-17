import React from "react";
import { useEffect, useState } from "react";

function Api() {
  const [jokeSetup, setJokeSetup] = useState("");
  const [jokePunchline, setJokePunchline] = useState("");
  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setJokeSetup(data.setup);
        setJokePunchline(data.punchline);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <button onClick={fetchJoke}> Try out some fun jokes! </button>
      <p>
        {jokeSetup}
        {jokePunchline}
      </p>
    </div>
  );
}

export default Api;
