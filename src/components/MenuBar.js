import React, {useState} from "react";
import Clock from "./Clock";
import ControlCentre from "./ControlCentre";

function MenuBar() {
    const [controlCentre, setControlCentre] = useState(false);

    const menuBarItemClassName = "px-3 py-1 rounded focus:outline-none focus:bg-gray-500";

    return (
        <div className="w-screen flex flex-row flex-nowrap justify-between items-center bg-black text-gray-50 cursor-default select-none">
            <div className={menuBarItemClassName}>
                AK
            </div>

            <div className="flex">
                {/* Dark mode */}
                <div tabIndex="0" className={menuBarItemClassName}>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>
                </div>

                {/* Control Centre */}
                <div tabIndex="0" className={menuBarItemClassName} onFocus={() => setControlCentre(true)} onBlur={() => setControlCentre(false)}>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                    <ControlCentre visible={controlCentre}/>
                </div>

                <div className={menuBarItemClassName}>
                    <Clock />
                </div>
            </div>
        </div>
    );
}

export default MenuBar;