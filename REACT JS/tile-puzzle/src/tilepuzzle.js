import {Component } from 'react';
import './tilepuzzle.css';

class tilepuzzle extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            matrix : this.createRandomMatrx(),
        };
    }

    createRandomMatrx(){
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
        // console.log(this.state.matrix);
        this.DisplayBoxes();
        this.addEventListnerToBoxes();
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
        element.innerText = (id === 0)? "": id;
        document.getElementById('boxWithBoxes').append(element);
    }

    addEventListnerToBoxes(){
        let matrix = this.state.matrix;
        let i,j,flag=0;
        for(i = 0 ; i <= 2 ; i++){
            for(j = 0 ; j <= 2 ; j++){ 
                if(matrix[i][j] === 0) { 
                    flag=1;
                    break;
                }
            }
            if(flag === 1) break;
        }
        
        // console.log(i + " - " + j);
        this.setRight(i,j);
        this.setLeft(i,j);
        this.setTop(i,j);
        this.setDown(i,j);
    }

    setRight(i,j) {
        if(j === 2) return;
        j+=1;
        // console.log("right : " + i +" , " + j);
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapEmpty(i,j));
    }

    setLeft(i,j) {
        if(j === 0) return;
        j-=1;
        // console.log("left :" + i + " , " + j);
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapEmpty(i,j));
    }

    setDown(i,j) {
        if(i === 2) return;
        i+=1;
        // console.log("down : " + i +" , " + j);
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapEmpty(i,j));
    }
    setTop(i,j) {
        if(i === 0) return;
        i-=1;
        // console.log("top : " + i +" , " + j);
        let id = this.state.matrix[i][j];
        document.getElementById(id).addEventListener('click',() => this.swapEmpty(i,j));
    }

    swapEmpty(row,column) {

    }
    render(){
        return(
            <div>
                <div className="mainBox">
                    <div id="boxWithBoxes" className="innerBox">
                    </div>
                </div>
            </div>
        )
    }
}

export default tilepuzzle;