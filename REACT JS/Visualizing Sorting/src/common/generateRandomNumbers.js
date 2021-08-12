export default function generateRandomNumber() {
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
}