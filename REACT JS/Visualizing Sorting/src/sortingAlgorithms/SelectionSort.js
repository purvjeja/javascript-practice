import { useState } from "react";
import { useRecoilState } from "recoil";
import { arrayToSortCommonState,sortingRunningStatus } from "../common/commonData";
import swap from "../common/swap";
import { AlgorithmSortingBox } from "../components/algorithmSortingBox";


export default function SelectionSort() {
    let [array,setArray] = useRecoilState(arrayToSortCommonState);
    let [comparisonCount,setComparisonCount] = useState(0);
    let algorithmRunStatus = useRecoilState(sortingRunningStatus);
    let [swapCount,setSwapCount] = useState(0);
    let [colorIndexesSettings,setColorIndexesSettings] = useState({
        compare: [],
        swap : [],
        sorted : []
    });

    if(algorithmRunStatus[0]) {    
        let timeout = 1000;
        let currentArray = array;
        let lengthOfArray = array.length;
        let minimum;
        console.log(currentArray);
        for(let i  = 0 ; i < lengthOfArray - 1 ; i++) {
            setTimeout(() => {
                
            }, timeout);
            minimum = i;
            for(let j  = i+1 ; j < lengthOfArray ; j++)   if(currentArray[j] < currentArray[minimum]) minimum = j;
            minimum = currentArray[i+1];    
            // swap(currentArray,minimum,i);
            setArray([...currentArray]);
        }
    }
    return ( 
        <AlgorithmSortingBox array={array} comparisonCount={comparisonCount} swapCount={swapCount} colorIndexesSettings={colorIndexesSettings} />
        )    
} 