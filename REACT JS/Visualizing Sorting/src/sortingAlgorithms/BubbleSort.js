
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { arrayToSortCommonState ,sortedStatus ,sortingTimeSpeed,sortingRunningStatus } from "../common/commonData";
import { AlgorithmSortingBox } from "../components/algorithmSortingBox";
import swap from "../common/swap";


export default function BubbleSort() {
    let [mainArray,setMainArray] = useRecoilState(arrayToSortCommonState);
    let [statusOfSorting,setStatusOfSorting] = useRecoilState(sortedStatus);
    let timeSpeed = useRecoilState(sortingTimeSpeed);
    let [array,setArray] = useState(mainArray[0]);
    let algorithmRunStatus = useRecoilState(sortingRunningStatus);
    let [ithIndex,setIthIndex] = useState(0);
    let [jthIndex,setJthIndex] = useState(0);
    let [loopInvokeStatus,setLoopInvokeStatus] = useState(true);

    if(algorithmRunStatus[0] && loopInvokeStatus) {
        let timeOut = 1000;
        const lengthOfArray = array.length;
        const currentArray = array;
        for(let i = 0; i < lengthOfArray ; i++) {
            for(let j = 0 ; j < lengthOfArray-i-1  ; j++) {
                setTimeout(() => {
                    setLoopInvokeStatus(false);
                    console.log("count");
                    setIthIndex(i);
                    setJthIndex(j);
                    if(currentArray[j] > currentArray[j+1]) swap(currentArray,j,j+1);
                    setArray([...currentArray]);
                    if(i === lengthOfArray - 2 && j === lengthOfArray - i - 2)
                     { 
                        setStatusOfSorting(true);
                        
                     }
                },  timeOut += timeSpeed[0]);
            }    
        }
    }

    return ( 
        <AlgorithmSortingBox array={array}  />
        )    
}