import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { arrayToSortCommonState ,sortedStatus ,sortingTimeSpeed,sortingRunningStatus } from "../common/commonData";
import { AlgorithmSortingBox } from "../components/algorithmSortingBox";
import swap from "../common/swap";

export default function BubbleSort() {
    let [mainArray,setMainArray] = useRecoilState(arrayToSortCommonState);
    let [statusOfSorting,setStatusOfSorting] = useRecoilState(sortedStatus);
    let timeSpeed = useRecoilState(sortingTimeSpeed);
    let [array,setArray] = useState(mainArray);
    let algorithmRunStatus = useRecoilState(sortingRunningStatus);
    let [loopInvokeStatus,setLoopInvokeStatus] = useState(true);
    let [comparisonCount,setComparisonCount] = useState(0);
    let [swapCount,setSwapCount] = useState(0);
    let [colorIndexesSettings,setColorIndexesSettings] = useState({
        compare: [],
        swap : [],
        sorted : []
    });
    let finalIndexes = [];

    useEffect(() => {
        setArray(mainArray);
    },[mainArray]);

    if(algorithmRunStatus[0] && loopInvokeStatus) {
        let timeOut = 1000;
        const lengthOfArray = array.length;
        const currentArray = array;
            for(let i = 0; i < lengthOfArray ; i++) {
                for(let j = 0 ; j < lengthOfArray-i-1  ; j++) {
                    // eslint-disable-next-line 
                    setTimeout(() => {

                        if(loopInvokeStatus) setLoopInvokeStatus(false);
                        // console.log(currentArray);
                        for(let k = array.length - 1 ; k > array.length - i - 1 ; k--) finalIndexes.push(k);
                        // let comparedBoxesPosition = (i === array.length - 2) ? [] : [j,j+1];
                        setComparisonCount(comparisonCount++);

                        setColorIndexesSettings({
                            compare: [j,j+1],
                            swap : [],
                            sorted : finalIndexes 
                        });
                        if(currentArray[j] > currentArray[j+1]) { 
                            setSwapCount(swapCount++);
                            swap(currentArray,j,j+1);
                            setArray([...currentArray]);
                        }
                        if(i === lengthOfArray - 2 && j === lengthOfArray - i - 2)
                        { 
                            setStatusOfSorting(true);
                            
                        }
                    },  timeOut += timeSpeed[0]);
                }    
            }
    }
    return ( 
        <AlgorithmSortingBox array={array} comparisonCount={comparisonCount} swapCount={swapCount} colorIndexesSettings={colorIndexesSettings} />
        )    
}