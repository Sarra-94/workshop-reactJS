import React from "react";
import "./App.css";

// components
import MainVideo from "./components/mainVideo/mainVideo";
import Suggestion from "./components/suggestion/suggestion";
import Comments from "./components/comments/comments";

function App() {
  return (
    <div className="mainPage">
      <div>
        <MainVideo />
        <Comments />
      </div>
      <Suggestion />
    </div>
  );
}

export default App;
