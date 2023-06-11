import { useState } from "react";
const Stopwatch = () => {
    const [time, setTime] = useState(0)

    function onStart() {
        setInterval(() => {
            setTime((time) => time + 1)
        },1000)
    }
    return (
        <div>
            <h1>STOPWATCH</h1>
            <h2> { Math.floor(time / 60) < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60) } : {time % 60 < 10 ? "0" + (time % 60) : time % 60}</h2>
            <button onClick={onStart}>Start</button>
        </div>
    )
}
export default Stopwatch