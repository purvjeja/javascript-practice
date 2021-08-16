import { useState } from "react"
import { liveAlgorithmData } from "../common/commonData"
import "../commonStyle.css";
export default function TimeSpeed() {
    let [speedCounter,setSpeedCounter] = useState(1000);
    let handeleChange = (event) => {
        liveAlgorithmData.speedTimeCount= parseInt(event.target.value);    
        setSpeedCounter(event.target.value);
    }
    return(
            <select className="timeCountButton" value={speedCounter} onChange={handeleChange}>
                <option value={2000}>0.25x Speed</option>
                <option value={1600}>0.5x Speed</option>
                <option value={1300}>0.75x Speed</option>
                <option defaultChecked value={1000}>1x Speed</option>
                <option value={700}>1.25x Speed</option>
                <option value={400}>1.5x Speed</option>
                <option value={100}>1.75x Speed</option>
            </select>
    )
}