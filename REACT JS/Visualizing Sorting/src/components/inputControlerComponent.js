import "../commonStyle.css"; 
import BubbleSort from "../sortingAlgorithms/BubbleSort";
import TimeSpeed from "./timeSpeed";
import  generateRandomNumber  from "../features/generateRandomNumbers";
import { arrayToSort } from "../common/commonData";
export default function ControlInput() {
    
    const updateSortingArea = () => {
        let tempArray = document.getElementById("arrayInput").value.split(",");
        tempArray = arrayToSort.map(arrayElement => parseInt(arrayElement));
        arrayToSort.value = tempArray;
    }   

    return (
        <div className="inputControllerComponent">
            <input id="arrayInput" type="text" onChange={updateSortingArea} /> 
            <button onClick={() => generateRandomNumber()}> Random Numbers </button>
            <button onClick={BubbleSort}>Start</button>
            <TimeSpeed />
        </div>
    )
}