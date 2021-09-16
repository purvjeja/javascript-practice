import { useState } from "react";
import { useRecoilState } from "recoil";
import { arrayToSortCommonState,sortingRunningStatus } from "../common/commonData";
import { AlgorithmSortingBox } from "../components/algorithmSortingBox";

export default function MergeSort() {
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
        let currentArray = array;
        // let lengthOfArray = 
        // if()
    }

    return ( 
        <AlgorithmSortingBox array={array} comparisonCount={comparisonCount} swapCount={swapCount} colorIndexesSettings={colorIndexesSettings} />
        )    
}