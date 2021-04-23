import React from "react";
import Clock from "./Clock";

function MenuBar() {
    return (
        <div className="w-screen px-5 flex flex-row flex-nowrap justify-between items-center bg-black text-gray-50 cursor-default select-none">
            <div>1</div>
            <div><Clock /></div>
            <div>3</div>
        </div>
    );
}

export default MenuBar;