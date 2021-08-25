import { atom } from "recoil";

export let sortedStatus = atom({
    key : 'sortedStatus',
    default : false
});

export let sortingRunningStatus = atom({
    key : 'sortingRuningStatus',
    default : false
});


export let colorIndexesSettings = {
    compareColorIndex : [],
    swapColorIndex : [],
    sortedColorIndex : []
};

export let sortingTimeSpeed = atom({
    key : 'sortingTimeSpeed',
    default : 1000
});

export let arrayToSortCommonState = atom({
    key : 'arrayToSort',
    default : [4,3,2,1,0,-1,-2,-3,-4]
});

export const currentSelectedAlgorithmState = atom({   
    key : 'currentActiveAlgorithm',
    default : 2
});

export const listOfAlgorithms = [
    {id:1 , name : "Bubble Sort"},
    {id:2 , name : "Merge Sort"},
    {id:3 , name : "Selection Sort"},
    {id:4 , name : "Insertion Sort"},
    {id:5 , name : "Heap Sort"},
    {id:6 , name : "Quick Sort"},
];