import React from "react";

function Greet() {
  const people = [
    { name: "a", age: 21 },
    { name: "b", age: 22 },
    { name: "c", age: 23 },
  ];
  return (
    <div>
      {people.map((person, key) => {
        return (
          <div key={key}>
            {person.name} {person.age}
          </div>
        );
      })}
    </div>
  );
}
// const Greet = () => <h1>Welcome to Yue's little world</h1>
export default Greet;
