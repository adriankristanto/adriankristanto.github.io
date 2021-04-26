/**
 * On implementing dropdown menu: https://ncoughlin.com/posts/react-dropdown/
 */
 import React, {useState, useEffect, useRef} from "react";

function DropDownUtility(props) {
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

    return (
        <div ref={ref}>
            <div tabIndex={props.tabIndex} className={`${props.className} ${visible && 'bg-gray-100 dark:bg-gray-500' }`} 
                onClick={() => setVisible(!visible)}
            >
                {props.icon}
            </div>

            {visible && (props.children)}
        </div>
    )

}

export default DropDownUtility;