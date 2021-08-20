import { atom } from "recoil";
export let liveAlgorithmData = {
    speedTimeCount : 1000,
    sortedStatus : false,
    arrayToSort : [4,3,2,1,0,-1,-2,-3,-4],  
};

export let colorIndexesSettings = {
    compareColorIndex : [],
    swapColorIndex : [],
    sortedColorIndex : []
};

export let arrayToSortCommonState = atom({
    key : 'arrayToSort',
    default : [4,3,2,1,0,-1,-2,-3,-4]
});

export const currentSelectedAlgorithmState = atom({   
    key : 'currentActiveAlgorithm',
    default : 1
});

export const listOfAlgorithms = [
    {id:1 , name : "Bubble Sort"},
    {id:2 , name : "Merge Sort"},
    {id:3 , name : "Selection Sort"},
    {id:4 , name : "Insertion Sort"},
    {id:5 , name : "Heap Sort"},
    {id:6 , name : "Quick Sort"},
];