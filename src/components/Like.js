import React from "react";
import { useState } from "react";

function Like() {
  const [like, setLike] = useState(0);
  const [textColor, setTextColor] = useState("black");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const increaseLike = () => {
    setLike(like + 1);
    setTextColor("white");
    setButtonDisabled(true);
  };
  return (
    <div>
      {like}
      <button onClick={increaseLike} disabled={buttonDisabled} style={{ color: textColor }}>
        Like
      </button>
    </div>
  );
}

export default Like;
