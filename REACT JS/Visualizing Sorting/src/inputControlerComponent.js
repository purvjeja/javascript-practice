import "./commonStyle.css"; 
import TimeSpeed from "./timeSpeed";
import generateRandomNumbers from ".common/generateRandomNumbers"
export default function ControlInput() {
    return(
        <div>
            <input id="arrayInput" type="text" onChange={updateSortingArea} /> 
            <button onClick={generateRandomNumber}>Random Numbers</button>
            <button onClick={bubbleSort}>Start</button>
            <TimeSpeed />
        </div>
    )
}