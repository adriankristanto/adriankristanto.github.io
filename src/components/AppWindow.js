import React from "react";
import Draggable from "react-draggable";

function AppWindow(props) {
    /**
     * props.key
     * props.appId
     * props.focused
     */
    return (
        <Draggable handle=".handle" bounds="parent" allowAnyClick={false}>
            <div tabIndex={props.tabIndex} className={`absolute top-9 left-1 w-full h-1/2 xs:w-3/5 xs:h-3/5 rounded-lg bg-red-500 ${props.focused ? 'z-30' : 'z-0'}`} onPointerDown={_ => props.handleWindowClick(props.appId)}>
                <div className="handle bg-gray-300 dark:bg-black flex justify-start rounded-t-lg px-1.5 py-1">
                    {/* close */}
                    <div className="mx-1.5 rounded-full bg-red-500 px-0.5 py-0.5" onClick={_ => props.handleAppClose(props.appId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </div>
                    {/* minimize */}
                    <div className="mx-1.5 rounded-full bg-yellow-400 px-0.5 py-0.5 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h12v2H6v-2z"/></svg>
                    </div>
                    {/* maximize */}
                    <div className="mx-1.5 rounded-full bg-green-500 px-0.5 py-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><rect fill="none" height="24" width="24"/><polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71"/></svg>
                    </div>
                </div>
                <div>
                    {props.appId}
                </div>
            </div>
        </Draggable>
    );
}

export default AppWindow;