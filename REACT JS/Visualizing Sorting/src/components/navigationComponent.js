import "../commonStyle.css";
import { currentSelectedAlgorithmState, listOfAlgorithms,liveAlgorithmData } from "../common/commonData";
import { useState } from "react";
import { useRecoilState } from "recoil";
export default function NavigationBar() {
    let [currentActive,setCurrentActive] = useRecoilState(currentSelectedAlgorithmState);
 
    const setSelectionColor = (id) => {
        return {
            backgroundColor  : (id === currentActive) ? "white" : "cyan",
            borderBottomColor : (id === currentActive) ? "black" : "",
            borderBottomWidth : (id === currentActive) ? "6px" : ""
       }
    }
    
    const setSelectionStatus = (selectedId) => {
        setCurrentActive(selectedId);
    }

    liveAlgorithmData.currentActiveAlgorithm= currentActive;

    return (
        <div> 
            <h1 style={{"padding-left" : "20px"}}> Sorting Visualizer</h1>
            <div className="navigationOptions">
                 {listOfAlgorithms.map((algorithm,index) => <button style={setSelectionColor(algorithm.id)} onClick={() => setSelectionStatus(algorithm.id)} className="algoOptionButton" id={algorithm.id}><h3>{algorithm.name}</h3></button> )}
            </div>
        </div>
    );
}