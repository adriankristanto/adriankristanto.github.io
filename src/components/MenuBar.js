import React from "react";
import Clock from "./Clock";
import ControlCentre from "./ControlCentre";
import DarkMode from "./DarkMode";

function MenuBar() {
    const menuBarItemClassName = "px-3 py-1 rounded focus:outline-none";

    return (
        <div className="absolute top-0 z-50 w-screen px-2 flex flex-row flex-nowrap justify-between items-center bg-gray-300 text-black dark:bg-black dark:text-gray-50 cursor-default select-none">
            <div tabIndex="0" className={menuBarItemClassName}>
                AK
            </div>

            <div className="flex justify-center items-center">
                <DarkMode tabIndex="0" className={menuBarItemClassName}/>

                <ControlCentre tabIndex="0" className={menuBarItemClassName} />

                <Clock tabIndex="0" className={menuBarItemClassName} />
            </div>
        </div>
    );
}

export default MenuBar;