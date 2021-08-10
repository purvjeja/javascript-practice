import { useEffect, useState } from "react"
import "./sortingComponent.css";
import swap from "./swap";

export default function SortingComponent() {
    let [arrayToSort,setArrayToSort] = useState([4,3,2,1,0,-1,-2,-3,-4]);
    let [sortedStatus,setSortedStatus] = useState(false);
    let [operationIndex,setOperationIndex] = useState({
        compareColorIndex : [],
        swapColorIndex : [],
        sortedColorIndex : []
    });
    let [ithIndex,setIthIndex] = useState(0);
    let [jthIndex,setJthIndex] = useState(0);

    const updateSortingArea = () => {
        let array = document.getElementById("arrayInput").value.split(",");
        array = array.map(arrayElement => parseInt(arrayElement));
        setArrayToSort(array);
    }   

    useEffect(() => {
        const finalIndexes = [];
        for(let i = arrayToSort.length - 1 ; i > arrayToSort.length - ithIndex - 1 ; i-- ) finalIndexes.push(i);
        const comparedBoxesPosition = (ithIndex === arrayToSort.length-2) ? [] : [jthIndex,jthIndex+1];

        setOperationIndex({
            compareColorIndex : comparedBoxesPosition,
            swapColorIndex : comparedBoxesPosition,
            sortedColorIndex : finalIndexes,
        })
    },[ithIndex,jthIndex,arrayToSort]);

    const generateRandomNumber = () => {
        setSortedStatus(false);
        let randomNumberArray = [];
        for(let i = 0 ; i < 10 ; i++) {
            randomNumberArray.push(parseInt(Math.random() * 100));
        }
        document.getElementById("arrayInput").value = randomNumberArray.toString(); 
        setOperationIndex({
            compareColorIndex : [],
            swapColorIndex : [],
            sortedColorIndex : [], 
        });
        setArrayToSort(randomNumberArray);
    }


    const setColor = (index) => { 
        return {backgroundColor : (operationIndex.compareColorIndex.includes(index)? 'pink' : 
                                  (operationIndex.swapColorIndex.includes(index)) ? 'yellow' : 
                                  (operationIndex.sortedColorIndex.includes(index)) ? 'green' : 'grey') }; 
    }

    const NumberBox = (props) => {
        return (
            <div className="box" id={props.index} style={setColor(props.index)}>
                {props.content}
            </div>
        )
    }   


    const bubbleSort = () => {
        let timeOut = 500;
        const n = arrayToSort.length;
        const array = arrayToSort;
        for(let i = 0; i < n ; i++) {
            for(let j = 0 ; j < n-i-1  ; j++) {
                // eslint-disable-next-line no-loop-func
                setTimeout(() => {
                    setIthIndex(i);
                    setJthIndex(j);
                    if(array[j] > array[j+1]) swap(array,j,j+1);          
                    setArrayToSort([...array]);
                    if(i === n - 2 && j === n - i - 2) setSortedStatus(true);
                },  timeOut += 1000);
            }    
        }
    }   

    return (
        <div>
        <input id="arrayInput" type="text" onChange={updateSortingArea} /> 

        <div className="numberBoxArea"> 
            {arrayToSort.map((arrayElement,index) => <div key={index}>  <NumberBox index={index} content={arrayElement}  /> </div>)}
        </div>
        <button onClick={bubbleSort}>Start</button>
        <button onClick={generateRandomNumber}> Random Numbers </button>
       </div>
    )       
}