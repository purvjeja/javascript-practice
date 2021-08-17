import "./commonStyle.css";
import ControlInput from "./components/inputControlerComponent";
import { liveAlgorithmData } from "./common/commonData";
import NavigationComponent from "./components/navigationComponent";
import AlgorithmBox from "./components/algorithmSortingBox";
export default function Main() {
    return (
        <>
            <NavigationComponent />
            <ControlInput array={liveAlgorithmData.arrayToSort} /> 
            <AlgorithmBox array={liveAlgorithmData.arrayToSort} />
       </>
    )       
}