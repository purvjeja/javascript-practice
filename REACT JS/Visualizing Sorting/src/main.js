import "./commonStyle.css";
import ControlInput from "./components/inputControlerComponent";
import NavigationComponent from "./components/navigationComponent";
import { RecoilRoot } from "recoil";
import AlgorithmSortingArea from "./components/algorithmSortingBox";

export default function Main() {
    return (
        <>
            <RecoilRoot>
                <NavigationComponent />
                <ControlInput /> 
                <AlgorithmSortingArea />
            </RecoilRoot>
       </>
    )       
}