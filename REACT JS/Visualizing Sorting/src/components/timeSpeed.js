import { useState } from "react"
import { sortingTimeSpeed } from "../common/commonData"
import { useRecoilState } from "recoil";
import "../commonStyle.css";
export default function TimeSpeed() {
    let [timeSpeedValue,setTimeSpeedValue] = useRecoilState(sortingTimeSpeed);
    
    let handeleChange = (event) => { setTimeSpeedValue(parseInt(event.target.value)); }
    return(
            <select className="timeCountButton" value={timeSpeedValue} onChange={handeleChange}>
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