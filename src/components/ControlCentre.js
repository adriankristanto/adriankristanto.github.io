/**
 * On implementing dropdown menu: https://ncoughlin.com/posts/react-dropdown/
 */
import React, {useState, useEffect, useRef} from "react";

function ControlCentre(props) {
    const [visible, setVisible] = useState(false);
    // create a ref variable, add it to the top <div> of the dropdown menu, i.e <div ref={ref}>
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = e => {
            // if the any of the children of <div ref={ref}> is clicked, do nothing
            // ref.current: avoiding ref is null error
            if (ref.current && ref.current.contains(e.target)){
                return
            }
            // else, toggle the menu
            setVisible(false)
        }

        document.body.addEventListener('click', onBodyClick);
        
        // to avoid ref.current is null error
        return function cleanup() {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, [])

    const tileClassName = "bg-gray-200 dark:bg-gray-700 shadow-lg rounded"

    return (
        <div ref={ref}>
            <div tabIndex={props.tabIndex} className={`${props.className} ${visible && 'bg-gray-100 dark:bg-gray-500' }`} 
                onClick={() => setVisible(!visible)}
            >
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </div>

            {visible && (
            <div className="absolute my-0.5 top-8 right-0.5 rounded-lg bg-gray-300 dark:bg-black">

                <div className='flex my-3'>
                    <div className={`flex flex-col px-4 py-1 mr-1.5 ml-3 ${tileClassName} justify-center`}>
                        <div className='flex mb-3'>
                            <div className='mr-4'>
                                {/* Wi-Fi */}
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                            </div>
                            <div className='ml-4'>
                                Wi-Fi
                            </div>
                        </div>
                        <div className='flex my-3'>
                            <div className='mr-4'>
                                {/* Bluetooth */}
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/></svg>
                            </div>
                            <div className='ml-4'>
                                Bluetooth
                            </div>
                        </div>
                        <div className='flex mt-3'>
                            <div className='mr-4'>
                                {/* Location */}
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                            </div>
                            <div className='ml-4'>
                                Location
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col ml-1.5 mr-3'>
                        <div className={`flex px-2 py-4 ${tileClassName} mb-1`}>
                            {/* Battery */}
                            <div className='mx-4'>
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/></svg>
                            </div>
                            <div className='mx-4'>
                                100%
                            </div>
                        </div>

                        <div className="flex pt-2 justify-between text-sm">
                            <div className={`w-1/2 mr-1.5 px-2 py-2 flex flex-col items-center text-center ${tileClassName}`}>
                                <div className="my-1">
                                    {/* Airplane Mode */}
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>
                                </div>
                                <div>
                                    <p>Airplane</p>
                                    <p>Mode</p>
                                </div>
                            </div>
                            <div className={`w-1/2 ml-1.5 px-2 py-2 flex flex-col items-center text-center ${tileClassName}`}>
                                <div className="my-1">
                                    {/* Do Not Disturb */}
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M7,11v2h10v-2H7z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"/></g></g></svg>
                                </div>
                                <div>
                                    <p>Do Not</p>
                                    <p>Disturb</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex mx-3 my-3 ${tileClassName} px-4 py-2 justify-between`}>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>
                    <input  
                        className="w-5/6"
                        type="range" 
                        min="0" max="10" 
                        step="1"/>
                </div>

                <div className={`flex mx-3 my-3 ${tileClassName} px-4 py-2 justify-between`}>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
                    <input 
                        className="w-5/6"
                        type="range" 
                        min="0" max="10" 
                        step="1"/>
                </div> 
            </div>
            )}
        </div>
    )
}

export default ControlCentre;