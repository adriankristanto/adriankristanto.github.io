import React from 'react';
import DockItem from "./DockItem";

function Dock(props) {

    return (
        <div className="absolute bottom-0.5  w-screen flex justify-center">
            <div className="flex mx-0.5 w-auto z-50 px-1.5 py-3 bg-gray-300 text-black dark:bg-black dark:text-gray-50 rounded-2xl shadow-lg">

                <DockItem id="video-player" openApp={e => props.handleAppIconClick(e.target.id)} icon="VP"/>
                <DockItem id="terminal" openApp={e => props.handleAppIconClick(e.target.id)} icon="T"/>
                <DockItem id="web-browser" openApp={e => props.handleAppIconClick(e.target.id)} icon="WB"/>
                <DockItem id="mail" openApp={e => props.handleAppIconClick(e.target.id)} icon="M"/>
                <DockItem id="pdf-viewer" openApp={e => props.handleAppIconClick(e.target.id)} icon="PV"/>

            </div>
        </div>
    )
}

export default Dock;