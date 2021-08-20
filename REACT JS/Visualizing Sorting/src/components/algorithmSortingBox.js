import { useRecoilState } from "recoil"
import { colorIndexesSettings,liveAlgorithmData,listOfAlgorithms, currentSelectedAlgorithmState ,arrayToSortCommonState} from "../common/commonData"
export default function AlgorithmBox(props) {
    const currentActiveId = useRecoilState(currentSelectedAlgorithmState);
    const array = useRecoilState(arrayToSortCommonState);
    return(
        <div className="areaOfAlgorithmsVisualization">
            <div className="sortingBlockBox">
                <div className="sortingInformationOne">
                    <div className="sortingHeader"><b><u>{getAlgorithmName(currentActiveId)}</u></b></div>
                    <div className="sortingTime">Time : {}</div>
                </div>
                <div className="numberBoxArea"> 
                    {array[0].map((arrayElement,index) => <div key={index}> <NumberBox index={index} content={arrayElement}  /> </div>)}
                </div>
                <div className="sortingInformationTwo">
                    <div className="sortingSwaps"> Swaps : {} </div>
                    <div className="sortingComparison">Comparisions : {} </div>
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
        <div className="box" id={props.index} style={setColor(props.index)}>
            {props.content}
        </div>
    )
}

const setColor = (index) => { 
    return {
    backgroundColor : (colorIndexesSettings.compareColorIndex.includes(index)? 'pink' : 
                      (colorIndexesSettings.swapColorIndex.includes(index)) ? 'yellow' : 
                      (colorIndexesSettings.sortedColorIndex.includes(index) || liveAlgorithmData.sortedStatus ) ? 'green' : 'grey') }; 
}