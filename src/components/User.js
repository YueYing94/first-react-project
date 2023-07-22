import React from "react";

const User = (props) => {
  const address = <h3>address: {props.address}</h3>;
  const email = <h3>email: {props.email}</h3>;
  const github = <h3>github: {props.github}</h3>;
  const linkedin = <h3>linkedin: {props.linkedin}</h3>;
  const isBlue = false;
  return (
    <div className="profile" style={{ color: isBlue ? "#465573" : "#7e4c5d" }}>
      {address}
      {email}
      {github}
      {linkedin}
    </div>
  );
};

export default User;
