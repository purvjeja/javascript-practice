import { liveAlgorithmData,colorIndexesSettings } from "../common/commonData";

export default function generateRandomNumber() {
        liveAlgorithmData.sortedStatus = false;
        let randomNumberArray = [];
        
        for(let i = 0 ; i < 10 ; i++)
            randomNumberArray.push(parseInt(Math.random() * 100));
     
        document.getElementById("arrayInput").value = randomNumberArray.toString(); 
        
        colorIndexesSettings.compareColorIndex = [];
        colorIndexesSettings.sortedColorIndex = [];
        colorIndexesSettings.swapColorIndex = [];

        liveAlgorithmData.arrayToSort = randomNumberArray;
}