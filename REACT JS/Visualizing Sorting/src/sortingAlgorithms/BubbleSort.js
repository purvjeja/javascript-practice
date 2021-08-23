
import { useState } from "react";
import { useRecoilState } from "recoil";
import {  liveAlgorithmData , arrayToSortCommonState } from "../common/commonData";
import { AlgorithmSortingBox } from "../components/algorithmSortingBox";
import swap from "../common/swap";


export default function BubbleSort() {
    let mainArray = useRecoilState(arrayToSortCommonState);
    let [array,setArray] = useState(mainArray[0]);
    let [ithIndex,setIthIndex] = useState(0);
    let [jthIndex,setJthIndex] = useState(0);

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
    

    return ( 
        <AlgorithmSortingBox array={array}  />
        )    
}