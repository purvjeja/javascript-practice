import swap from "../common/swap";
import { liveAlgorithmData,colorIndexesSettings } from "../common/commonData";
import { useState } from "react";
export default function BubbleSort() {
    let [array,setArray] = useState(liveAlgorithmData.arrayToSort);
    let [ithIndex,setIthIndex] = useState(0);
    let [jthIndex,setJthIndex] = useState(0);

    const finalIndexes = [];
    for(let i = liveAlgorithmData.arrayToSort.length - 1 ; i > liveAlgorithmData.arrayToSort.length - ithIndex - 1 ; i-- ) finalIndexes.push(i);
    const comparedBoxesPosition = (ithIndex === liveAlgorithmData.arrayToSort.length-2) ? [] : [jthIndex,jthIndex+1];

    colorIndexesSettings.compareColorIndex = comparedBoxesPosition;
    colorIndexesSettings.swapColorIndex = comparedBoxesPosition;
    colorIndexesSettings.sortedColorIndex = finalIndexes;
        
    let timeOut = 1000;
        const n = array.length;
        const currentArray = array;
        for(let i = 0; i < n ; i++) {
            for(let j = 0 ; j < n-i-1  ; j++) {
                // eslint-disable-next-line no-loop-func
                setTimeout(() => {
                    setIthIndex(i);
                    setJthIndex(j);
                    if(currentArray[j] > currentArray[j+1]) swap(currentArray,j,j+1);
                    setArray([...currentArray]);
                    if(i === n - 2 && j === n - i - 2) liveAlgorithmData.sortedStatus = true;
                },  timeOut += parseInt(liveAlgorithmData.speedTimeCount));
            }    
        }
}