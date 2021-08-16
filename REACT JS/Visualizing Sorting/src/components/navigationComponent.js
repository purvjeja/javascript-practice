import "../commonStyle.css";
import { listOfAlgorithms } from "../common/commonData";
export default function NavigationBar() {
    console.log(listOfAlgorithms);
    return (
        <div> 
            <h1> Sorting Visualizer</h1>
            <div className="navigationOptions">
                 {listOfAlgorithms.map((algorithm,index) => <button onClick={() => alert(algorithm.name)} className="algoOptionButton" id={algorithm.id}><h3>{algorithm.name}</h3></button> )}
            </div>
        </div>
    );
}