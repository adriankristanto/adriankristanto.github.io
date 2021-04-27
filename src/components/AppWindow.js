import React, {useState} from "react";
import Draggable from "react-draggable";

function AppWindow(props) {
    /**
     * props.key
     * props.appId
     * props.focused
     */
    const [windowPosition, setWindowPosition] = useState({x: 4, y:4})
    const [windowState, setWindowState] = useState({
        isMaximized: false,
        isMinimized: false
    })
    const [isDragging, setIsDragging] = useState(false)

    const handlePointerDown = e => {
        switch(e.target.id) {
            case "close":
                props.handleAppClose(props.appId)
                break;
            case "minimize":
                // setWindowState({isMaximized: windowState.isMaximized, isMinimized: true})
                break;
            case "maximize":
                let selectedWindow = document.getElementById(`${props.appId}-window`);
                if (windowState.isMaximized) {
                    // restore previous position
                    selectedWindow.style.transform = `translate(${windowPosition.x}px, ${windowPosition.y}px)`
                } else {
                    // store current position
                    const rect = selectedWindow.getBoundingClientRect()
                    const x = rect.x
                    const y = rect.y - 32 // position from the viewport - height of the menubar
                    setWindowPosition({x: x, y: y})
                    // move the window to top left before maximising
                    selectedWindow.style.transform = "translate(0px, 0px)"
                }
                setWindowState({isMaximized: !windowState.isMaximized, isMinimized: false})
                props.handleWindowClick(props.appId)
                break;
            default:
                props.handleWindowClick(props.appId)
        }
    }

    return (
        <Draggable 
            handle=".handle" defaultPosition={{x: windowPosition.x, y: windowPosition.x}} bounds="parent" allowAnyClick={false}
            onStart={_ => setIsDragging(true)}
            onStop={_ => setIsDragging(false)}
        >
            <div id={`${props.appId}-window`} tabIndex={props.tabIndex} className={`absolute ${windowState.isMaximized ? "duration-300 w-screen h-full" : "w-3/5 h-3/5"} ${windowState.isMinimized && "invisible"} rounded-lg bg-red-500 ${props.focused ? 'z-30' : 'z-0'}`} onPointerDown={e => handlePointerDown(e)}>
                <div className="handle bg-gray-300 dark:bg-black flex justify-start rounded-t-lg px-1.5 py-1 z-50">
                    {/* close */}
                    <div id="close" className="mx-1.5 rounded-full bg-red-500 px-2 py-2"/>
                    {/* minimize */}
                    <div id="minimize" className="mx-1.5 rounded-full bg-yellow-400 px-2 py-2" />
                    {/* maximize */}
                    <div id="maximize" className="mx-1.5 rounded-full bg-green-500 px-2 py-2" />
                </div>
                <div style={{height: `${windowState.isMaximized ? (window.innerHeight - 32 - 74) - 24 : (window.innerHeight - 32 - 74) * 0.6 - 24}px`, width: "100%"}}>
                    {props.appId}
                </div>
                {/* added cover when dragging to prevent dragging issue with iframe */}
                {isDragging && <div style={{zIndex: 1000, position: 'absolute', top: 24, left: 0, width: '100%', height:`${windowState.isMaximized ? (window.innerHeight - 32 - 74) - 24 : (window.innerHeight - 32 - 74) * 0.6 - 24}px`}} />}
            </div>
        </Draggable>
    );
}

export default AppWindow;