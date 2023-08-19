import React from "react";
import { useState } from "react";

function Movie() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null)
  const fetchMovie = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data[0]?.show)
      });
  };

  return (
    <div>
      <input
        placeholder="E.g. star war"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchMovie}> Get movie info! </button>
      <h5>Info: {result?.summary}</h5>
      <h5>Language: {result?.language}</h5>
    </div>
  );
}

export default Movie;
