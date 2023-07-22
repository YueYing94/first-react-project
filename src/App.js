import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import User from "./components/User";
import Like from "./components/Like";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      <Input />
      <Welcome />
      <Like />
      <button onClick={() => {setShowText(!showText)}}>About Me</button>

      { showText && <User
        address="Rotterdam, Netherlands"
        email="sarahyingyue1994@gmail.com"
        github="https://github.com/YueYing94"
        linkedin="https://www.linkedin.com/in/yueying94/"
      /> }
      <Greet />
    </div>
  );
}

export default App;
