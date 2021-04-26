import React from 'react';

function DockItem(props) {
    /**
     * Accepts:
     * props.id: the app id, e.g. browser, terminal, and so on
     * props.openApp: function to open the corresponding application
     * props.icon: icon of the application 
     */
    return (
        <div id={props.id} onClick={props.openApp} className="flex flex-nowrap justify-center items-center h-12 w-12 mx-1.5 rounded-lg bg-gray-100 dark:bg-gray-600">
            {props.icon}
        </div>
    )
}

export default DockItem;