import { useRecoilState } from "recoil";
import { arrayToSortCommonState } from "../common/commonData";

export default function BubbleSort() {
    let [array,setArray] = useRecoilState(arrayToSortCommonState);
    const a = [2,3];
    setArray([...a])

}