export let liveAlgorithmData = {
    speedTimeCount : 1000,
    sortedStatus : false,
    currentActiveAlgorithm : 1,
    arrayToSort : [4,3,2,1,0,-1,-2,-3,-4],  
};

export let colorIndexesSettings = {
    compareColorIndex : [],
    swapColorIndex : [],
    sortedColorIndex : []
};



export const listOfAlgorithms = [
    {id:1 , name : "Bubble Sort"},
    {id:2 , name : "Merge Sort"},
    {id:3 , name : "Selection Sort"},
    {id:4 , name : "Insertion Sort"},
    {id:5 , name : "Heap Sort"},
    {id:6 , name : "Quick Sort"},
    {id:7 , name : "All"}
];