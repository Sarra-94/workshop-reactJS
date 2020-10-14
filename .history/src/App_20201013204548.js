import React from "react";
import "./App.css";

// components
import Suggestion from "./components/suggestion/suggestion";
import Comments from "./components/comments/comments";

function App() {
  return (
    <div className="mainPage">
     
      <Suggestion />
      <Comments/>
    </div>
  );
}

export default App;
