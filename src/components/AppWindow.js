import React from "react";
import Draggable from "react-draggable";

function AppWindow(props) {
    /**
     * props.key
     * props.appId
     * props.focused
     */
    return (
        <Draggable bounds="parent" allowAnyClick={false}>
            <div tabIndex={props.tabIndex} className={`absolute top-9 left-1 w-full h-1/2 xs:w-3/5 xs:h-3/5 rounded-lg bg-red-500 ${props.focused ? 'z-30' : 'z-0'}`} onPointerDown={_ => props.handleWindowClick(props.appId)}>
                <div>
                    {props.appId}
                </div>
            </div>
        </Draggable>
    );
}

export default AppWindow;