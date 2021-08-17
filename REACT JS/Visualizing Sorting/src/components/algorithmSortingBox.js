import { useState } from "react"
import { colorIndexesSettings,liveAlgorithmData } from "../common/commonData"
export default function AlgorithmBox(props) {
    let [n,setN] = useState(0);
    return(
        <div className="areaOfAlgorithmsVisualization">
            <div className="sortingBlockBox">
                <div className="sortingInformationOne">
                    <div className="sortingHeader"><b><u>{liveAlgorithmData.currentActiveAlgorithm}</u></b></div>
                    <div className="sortingTime">Time : {}</div>
                </div>
                <div className="numberBoxArea"> 
                    {props.array.map((arrayElement,index) => <div key={index}>  <NumberBox index={index} content={arrayElement}  /> </div>)}
                </div>
                <div className="sortingInformationTwo">
                    <div className="sortingSwaps"> Swaps : {} </div>
                    <div className="sortingComparison">Comparisions : {} </div>
                </div>  
            </div>
            <button onClick={() => setN(n++)}> Purv </button>
        </div>  
    )
}

const NumberBox = (props) => {
    return (
        <div className="box" id={props.index} style={setColor(props.index)}>
            {props.content}
        </div>
    )
}

const setColor = (index) => { 
    console.log(liveAlgorithmData.sortedStatus);
    return {
    backgroundColor : (colorIndexesSettings.compareColorIndex.includes(index)? 'pink' : 
                      (colorIndexesSettings.swapColorIndex.includes(index)) ? 'yellow' : 
                      (colorIndexesSettings.sortedColorIndex.includes(index) || liveAlgorithmData.sortedStatus ) ? 'green' : 'grey') }; 
}