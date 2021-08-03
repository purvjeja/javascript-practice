import { useEffect, useState } from "react"
import "./sortingComponent.css";

export default function SortingComponent() {
    let [arrayToSort,setArrayToSort] = useState([4,3,2,1,0,-1,-2,-3,-4]);
    let [compareBoxes,setComapareBoxes] = useState([]);

    const updateSortingArea = () => {
        let array = document.getElementById("arrayInput").value.split(",");
        array = array.map(arrayElement => parseInt(arrayElement));
        setArrayToSort(array);
    }   
    
    useEffect(() => {
        console.log(arrayToSort);
    });

    const setColor = (index) => {
        console.log(compareBoxes);
        if(compareBoxes.includes(index)) return {'background-color' : 'yellow'};
        else return {'background-color' : 'grey'};
    }

    const bubbleSort = () => {
        let timeOut = 1000;
        const n = arrayToSort.length;
        const array = arrayToSort;
        for(let i = 0; i <= n - 1 ; i++) {
            for(let j = 0 ; j <= n-i-1 ; j++) {
                setComapareBoxes([j,j+1]);
                setTimeout(() => {
                    if(array[j] > array[j+1]) { 
                    const temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;         
                    }           
                    setArrayToSort([...array]);
                },  timeOut += 500);
            }
        }
    }   

    return (
        <div>
        <input id="arrayInput" type="text" onChange={updateSortingArea} />
        <div className="numberBoxArea"> 
            {arrayToSort.map((arrayElement,index) => <div className="box" key={index} style={setColor(index)} id={index}> {arrayElement} </div>)}
        </div>
        <button onClick={bubbleSort}>Start</button>
       </div>
    )       
}