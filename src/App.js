import React from "react";
import "./App.css";

import Header from "./components/Header";
import Feeds from "./components/Feeds";

function App() {
  const title = "Pixelgram";
  return (
    <div className="App">
      <Header title={title} />
      <Feeds />
    </div>
  );
}

export default App;
