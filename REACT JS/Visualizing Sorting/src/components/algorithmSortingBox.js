import { type } from "os"
import { useRecoilState } from "recoil"
import { colorIndexesSettings,listOfAlgorithms, currentSelectedAlgorithmState } from "../common/commonData"
import BubbleSort from "../sortingAlgorithms/BubbleSort"
import HeapSort from "../sortingAlgorithms/HeapSort"
import InsertionSort from "../sortingAlgorithms/InsertionSort"
import MergeSort from "../sortingAlgorithms/MergeSort"
import QuickSort from "../sortingAlgorithms/QuickSort"
import SelectionSort from "../sortingAlgorithms/SelectionSort"

const callOutAlgorithm = {
    1 : <BubbleSort />,
    2 : <MergeSort />,
    3 : <SelectionSort />,
    4 : <InsertionSort />,
    5 : <HeapSort />,
    6 : <QuickSort />
}


export default function AlgorithmSortingArea() {
    const currentActiveId = useRecoilState(currentSelectedAlgorithmState);
    return(
        callOutAlgorithm[currentActiveId[0]]
    )
}

export function AlgorithmSortingBox(props) {
    const currentActiveId = useRecoilState(currentSelectedAlgorithmState);
    return(
        <div className="areaOfAlgorithmsVisualization">
            <div className="sortingBlockBox">
                <div className="sortingInformationOne">
                    <div className="sortingHeader"><b><u>{getAlgorithmName(currentActiveId)}</u></b></div>
                    <div className="sortingTime">Time : {}</div>
                </div>
                <div className="numberBoxArea"> 
                    {props.array.map((arrayElement,index) => <div key={index}> <NumberBox index={index} colorIndexesSettings={props.colorIndexesSettings} content={arrayElement}  /> </div>)}
                </div>
                <div className="sortingInformationTwo">
                    <div className="sortingSwaps"> Swaps : {props.swapCount} </div>
                    <div className="sortingComparison">Comparisions : {props.comparisonCount} </div>
                </div>  
            </div>
        </div>  
    )
}

const getAlgorithmName = (currentId) => {
    return listOfAlgorithms[currentId[0] - 1].name;
}

const NumberBox = (props) => {
    return (
        <div className="box" id={props.index} style={setColor(props.index,props.colorIndexesSettings)}>
            {props.content}
        </div>
    )
}

const setColor = (index,colorIndexesSettings) => { 
    // console.log(colorIndexesSettings.compare);
    return {
    backgroundColor : (colorIndexesSettings.compare.includes(index) ? 'pink' : 
                      (colorIndexesSettings.swap.includes(index)) ? 'yellow' : 
                      (colorIndexesSettings.sorted.includes(index)) ? 'green' : 'grey') }; 
}

// || liveAlgorithmData.sortedStatus