import { useState } from "react"
import { data } from "./liveData"
import "./commonStyle.css";
export default function TimeSpeed() {
    let [speedCounter,setSpeedCounter] = useState(1000);
    data.speedTimeCount= speedCounter;
    return(
        <div className="timeCountButton">
            <button onClick = {() => {setSpeedCounter(speedCounter-=200)}}> + </button>
            <p><b>{speedCounter}</b></p>
            <button onClick = {() => {setSpeedCounter(speedCounter+=200)}}> - </button>
        </div>
    )
}