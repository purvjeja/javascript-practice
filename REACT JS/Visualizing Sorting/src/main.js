import "./commonStyle.css";
import ControlInput from "./components/inputControlerComponent";
import { arrayToSort } from "./common/commonData";
import NavigationComponent from "./components/navigationComponent";
import AlgorithmBox from "./components/algorithmSortingBox";
export default function Main() {
    return (
        <>
            <NavigationComponent />
            <ControlInput /> 
            <div className="areaOfAlgorithmsVisualization">
                <AlgorithmBox array={arrayToSort} />
            </div>
       </>
    )       
}