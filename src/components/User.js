import React from "react";
import PropTypes from "prop-types";
const User = (props) => {
  const age = <h3>age: {props.age}</h3>;
  const address = <h3>address: {props.address}</h3>;
  const email = <h3>email: {props.email}</h3>;
  const github = <h3>github: {props.github}</h3>;
  const linkedin = <h3>linkedin: {props.linkedin}</h3>;
  const isAvailable = (
    <h3>I {props.isAvailable ? "am" : "am not"} available to work now</h3>
  );
  const isBlue = false;
  return (
    <div className="profile" style={{ color: isBlue ? "#465573" : "#7e4c5d" }}>
      {isAvailable}
      {age}
      {address}
      {email}
      {github}
      {linkedin}
      <h3>Skills:</h3>
      {props.skills.map((skill) => (
        <h3>{skill}</h3>
      ))}
    </div>
  );
};

User.propTypes = {
  isAvailable: PropTypes.bool,
  age: PropTypes.number,
  address: PropTypes.string,
  email: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
};

export default User;
