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
    // append recently focused app at the end of the openedApp stack
    setOpenedApps(openedApps.filter(openedAppId => openedAppId !== appId).concat(appId))
  }

  const handleWindowClick = (appId) => {
    setFocusedApp(appId)
    // append recently focused app at the end of the openedApp stack
    setOpenedApps(openedApps.filter(openedAppId => openedAppId !== appId).concat(appId))
  }

  const handleAppClose = (appId) => {
    // filter out the closed appId
    setOpenedApps(openedApps.filter(openedAppId => openedAppId !== appId))
    // give focus to the last opened app
    setFocusedApp(openedApps[openedApps.length - 1])
  }

  const renderOpenedApps = () => {
    const appsJsx = []
    openedApps.forEach((appId) => {
      appsJsx.push(
        <AppWindow key={appId} tabIndex="0" appId={appId} focused={appId === focusedApp} handleWindowClick={handleWindowClick} handleAppClose={handleAppClose}/>
      )
    })
    return appsJsx;
  }

  return (
    // Mobile browser has different viewport implementation, so, use h-full instead of h-screen
    <div className="w-screen h-full">
      <MenuBar />
      {/* parent component to set draggable bounds, 32px = 2rem, which is the height of the menubar & 72px is the height of the dock with 2px padding from the bottom */}
      <div style={{height: window.innerHeight - 32 - 74}} className="absolute top-8 w-screen">
        {renderOpenedApps()}
      </div>
      <Dock handleAppIconClick={handleAppIconClick}/>
    </div>
  );
}

export default App;