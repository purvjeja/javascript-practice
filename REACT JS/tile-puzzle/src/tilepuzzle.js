import {Component} from 'react';
import './tilepuzzle.css';

class tilepuzzle extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            matrix : this.createRandomMatrix(),
            // matrix :  [[1,2,3],[4,5,6],[7,0,8]],
            coordinatesOfEmpty : [],
            MoveCount : 0
        }
    }

    createRandomMatrix(){
        let array = [0,1,2,3,4,5,6,7,8];
        let tmp, current, top = 9;
        while(--top) {
            current = parseInt(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }

        let twoDArray = [];
        for(let i = 0 ; i < 9 ; i+=3) {
            twoDArray.push([array[i],array[i+1],array[i+2]]);
        } 
      return twoDArray;
    }


    componentDidMount(){
        this.settingEmptyCoordinates();
    }

    settingEmptyCoordinates(){
        let matrix = this.state.matrix;
        let i,j,flag=0;
        for(i = 0 ; i <= 2 ; i++) {
            for(j = 0 ; j <= 2 ; j++) { 
                if(matrix[i][j] === 0) { 
                    flag=1;
                    break;
                }
            }
            if(flag === 1) break;
        }
        this.setState({
            coordinatesOfEmpty : [i,j]
        });
    }

    componentDidUpdate(){
        this.checkResult();
        document.getElementById('boxWithBoxes').innerHTML = "";
        this.DisplayBoxes();    
        this.addEventListnerToBoxes();
    }

    checkResult(){
        if(JSON.stringify(this.state.matrix) === JSON.stringify([[1,2,3],[4,5,6],[7,8,0]])) {
            alert("Voila,You have completed the puzzle in " + this.state.MoveCount + " moves :)");
            setTimeout(() => window.location.reload(),4000);
        }
    }

    DisplayBoxes(){
        let matrix = this.state.matrix;
        for(let i of matrix) {
            for(let j of i) { 
                this.createBox(j);        
            }
        }
    }

    createBox(id){
        let element = document.createElement('div');
        element.id = id;
        element.className = (id === 0 )? "emptyBox" : "boxes";
        element.innerText = (id === 0)? this.contentForEmptyLocation() : id;
        document.getElementById('boxWithBoxes').append(element);
    }

    contentForEmptyLocation(){
        if(this.state.coordinatesOfEmpty[0] === 2 && this.state.coordinatesOfEmpty[1] === 2) return "";
        return (this.state.coordinatesOfEmpty[0] * 3 + this.state.coordinatesOfEmpty[1]) + 1;
    }

    addEventListnerToBoxes() {
        console.log(this.state.coordinatesOfEmpty[0]);
        console.log(this.state.coordinatesOfEmpty[1]);
        let [i,j] = [this.state.coordinatesOfEmpty[0],this.state.coordinatesOfEmpty[1]];
        
        this.setRight(i,j);
        this.setLeft(i,j);
        this.setTop(i,j);
        this.setDown(i,j);
    }

    setRight(i,j) {
        if(j === 2) return;
        j+=1;
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapWithEmpty(i,j));
    }

    setLeft(i,j) {
        if(j === 0) return;
        j-=1;
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapWithEmpty(i,j));
    }

    setDown(i,j) {
        if(i === 2) return;
        i+=1;
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapWithEmpty(i,j));
    }
    setTop(i,j) {
        if(i === 0) return;
        i-=1;
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapWithEmpty(i,j));
    }

    swapWithEmpty(row,column) {
        let currentMatrix = this.state.matrix;
        let temp = currentMatrix[row][column];
        currentMatrix[row][column] = currentMatrix[this.state.coordinatesOfEmpty[0]][this.state.coordinatesOfEmpty[1]];
        currentMatrix[this.state.coordinatesOfEmpty[0]][this.state.coordinatesOfEmpty[1]] = temp;

        this.setState({
            matrix : currentMatrix,
            coordinatesOfEmpty : [row,column],
            MoveCount : this.state.MoveCount+1,
        });
    }
    
    render(){
        return(
        <div>
            <div className="GameComponents">
                <div className="heading">
                    <h1>3 X 3 Tile Puzzle Game</h1>
                    <div className="gameDatas">
                        <h2>Moves : {this.state.MoveCount}</h2>
                    </div>
                </div>
                <div className="mainBox">
                    <div id="boxWithBoxes" className="innerBox">
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default tilepuzzle;