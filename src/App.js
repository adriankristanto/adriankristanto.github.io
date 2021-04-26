import React from "react";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";

function App() {
  return (
    <div className="h-screen w-screen">
      <MenuBar />
      <Dock />
    </div>
  );
}

export default App;