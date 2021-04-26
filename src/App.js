import React, {useState} from "react";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import AppWindow from "./components/AppWindow";

function App() {
  const [openedApps, setOpenedApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState("");

  const handleAppIconClick = (appId) => {
    if (!openedApps.includes(appId)) {
      setOpenedApps([...openedApps, appId])
    }
    setFocusedApp(appId)
  }

  const handleWindowClick = (appId) => {
    setFocusedApp(appId)
  }

  const renderOpenedApps = () => {
    const appsJsx = []
    openedApps.forEach((appId, index) => {
      appsJsx.push(
        <AppWindow key={index} tabIndex="0" appId={appId} focused={appId === focusedApp} handleWindowClick={handleWindowClick}/>
      )
    })
    return appsJsx;
  }

  return (
    // Mobile browser has different viewport implementation, so, use h-full instead of h-screen
    <div className="w-screen h-full">
      <MenuBar />
      {/* parent component to set draggable bounds, 32px = 2rem */}
      <div style={{height: window.innerHeight - 32}} className="absolute top-8 w-screen">
        {renderOpenedApps()}
      </div>
      <Dock handleAppIconClick={handleAppIconClick}/>
    </div>
  );
}

export default App;