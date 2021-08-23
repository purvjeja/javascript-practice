import { useRecoilState, useSetRecoilState } from "recoil";
import { arrayToSortCommonState } from "../common/commonData";
import { AlgorithmSortingBox } from "../components/algorithmSortingBox";


export default function HeapSort() {
    let [array,setArray] = useRecoilState(arrayToSortCommonState);
    // setArray([1,2,3]);

    return ( 
        <AlgorithmSortingBox array={array}  />
        )    }