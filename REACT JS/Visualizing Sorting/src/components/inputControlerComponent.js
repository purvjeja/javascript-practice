import "../commonStyle.css"; 
import bubbleSort from "../sortingAlgorithms/BubbleSort";
import TimeSpeed from "./timeSpeed";
import { arrayToSortCommonState } from "../common/commonData";
import { useRecoilState } from "recoil";
import { AlgorithmSortingArea, AlgorithmSortingBox } from "./algorithmSortingBox";

export default function ControlInput() {
    
    let [array,setArray] = useRecoilState(arrayToSortCommonState);

    const generateRandomNumber = () => {
        // liveAlgorithmData.sortedStatus = false;
        let randomNumberArray = [];
        for(let i = 0 ; i < 10 ; i++) randomNumberArray.push(parseInt(Math.random() * 100));
        document.getElementById("arrayInput").value = randomNumberArray.toString(); 
        // colorIndexesSettings.compareColorIndex = [];
        // colorIndexesSettings.sortedColorIndex = [];
        // colorIndexesSettings.swapColorIndex = [];  
        setArray([...randomNumberArray]);

        return randomNumberArray;
    }

    const updateSortingArea = () => {
        let tempArray = document.getElementById("arrayInput").value.split(",");
        tempArray = tempArray.map(arrayElement => (isNaN(parseInt(arrayElement))) ? "" : parseInt(arrayElement) );
        console.log(tempArray);
        setArray([...tempArray]);
    }
    return (
        <div className="inputControllerComponent">
            <input id="arrayInput" type="text" defaultValue={array} onChange={updateSortingArea} /> 
            <button onClick={() => generateRandomNumber()}> Random Numbers </button>
            <button onClick={() => <AlgorithmSortingBox />}>Start</button>
            <TimeSpeed />
        </div>
    )
}   