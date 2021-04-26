import React, {useState} from "react";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import AppWindow from "./components/AppWindow";

function App() {
  const [openedApps, setOpenedApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState("");

  const handleAppIconClick = (appId) => {
    if (openedApps.includes(appId)) {
      setFocusedApp(appId)
    } else {
      setOpenedApps([...openedApps, appId])
    }
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
    <div className="h-screen w-screen">
      <MenuBar />
      {renderOpenedApps()}
      <Dock handleAppIconClick={handleAppIconClick}/>
    </div>
  );
}

export default App;