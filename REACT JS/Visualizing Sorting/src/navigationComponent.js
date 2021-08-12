import "./commonStyle.css";
export default function NavigationBar() {
    return (
        <div> 
            <h1> Sorting Visualizer</h1>
            <div className="navigationOptions">
                 <button className="algoOptionButton"><h3> Bubble Sort </h3></button>
                 <button className="algoOptionButton"><h3> Merge Sort </h3></button>
                 <button className="algoOptionButton"><h3> Selection Sort </h3></button>
                 <button className="algoOptionButton"><h3> Insertion Sort </h3></button>
                 <button className="algoOptionButton"><h3> Heap Sort </h3></button>
                 <button className="algoOptionButton"><h3> Quick Sort </h3></button>
                 <button className="algoOptionButton"><h3> All </h3></button>
            </div>
        </div>
    );
}