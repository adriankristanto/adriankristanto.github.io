import {useState, useEffect} from "react";

function Clock(props) {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    useEffect(() => {
        // update the time every 1000 milliseconds
        let timer = setInterval(() => {
            setCurrentDateTime(new Date())
        }, 1000);

        return function cleanup(){
            clearInterval(timer)
        };
    })

    let day = days[currentDateTime.getDay()]
    let date = currentDateTime.getDate()
    let month = months[currentDateTime.getMonth()]
    // change hour from 0-23 to 0-11
    // when hour === 0, change it to 12
    let hour = currentDateTime.getHours() % 12
    // .substr(-2) only take the last 2 characters from the string
    // so, when 001 -> 01 and 0012 -> 12
    hour = ("00" + (hour === 0 ? 12 : hour).toString()).substr(-2)
    let minute = ("00" + currentDateTime.getMinutes().toString()).substr(-2)
    let meridiem = currentDateTime.getHours() < 12 ? 'am' : 'pm'

    return (
        <div tabIndex={props.tabIndex} className={props.className}>
            {`${day} ${date} ${month} ${hour}:${minute} ${meridiem}`}
        </div>
    )
}

export default Clock;