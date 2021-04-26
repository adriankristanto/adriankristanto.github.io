import React from 'react';

function Dock() {

    return (
        <div className="absolute bottom-0.5  w-screen flex justify-center">
            <div className="flex mx-0.5 w-auto px-3 py-3 bg-gray-300 text-black dark:bg-black dark:text-gray-50 rounded-2xl">

                <div className="flex flex-nowrap justify-center items-center h-12 w-12 mr-1.5 rounded-lg bg-gray-600">
                    0
                </div>
                <div className="flex flex-nowrap justify-center items-center h-12 w-12 mx-1.5 rounded-lg bg-gray-600">
                    1
                </div>
                <div className="flex flex-nowrap justify-center items-center h-12 w-12 mx-1.5 rounded-lg bg-gray-600">
                    2
                </div>
                <div className="flex flex-nowrap justify-center items-center h-12 w-12 mx-1.5 rounded-lg bg-gray-600">
                    3
                </div>
                <div className="flex flex-nowrap justify-center items-center h-12 w-12 ml-1.5 rounded-lg bg-gray-600">
                    4
                </div>

            </div>
        </div>
    )
}

export default Dock;