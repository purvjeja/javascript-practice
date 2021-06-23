import {Component } from 'react';
import "./tictactoe.css";
class ticTacToe extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            ticTacToe : [['','',''],
                        ['','',''],
                        ['','','']], 
            currentInput : 'X', 
            playCount : 1,
            players : { player1 : '',
                        player2 : '',
                        player1is : 'X',
                        player2is : '0',                   
                        player1won : 0,
                        player2won : 0 
                     },
            setOfMatch : 3,
            currentRound : 1
        }
    }

    componentDidMount(){
        const player1Name = prompt("Player 1 Name?");
        const player2Name = prompt("Player 2 Name?");

        this.setState({
            players : { player1 : player1Name,
                        player2 : player2Name,
                        player1is : 'X',
                        player2is : '0',                   
                        player1won : 0,
                        player2won : 0 
                     }     
        });
    }
    
    boxPositionsOnMatrix = {
            'b1' : {'R' : 0 , 'C' : 0}, "b2" : {'R' : 0 , 'C' : 1}, "b3" : {'R' : 0 , 'C' : 2},
            "b4" : {'R' : 1 , 'C' : 0}, "b5" : {'R' : 1 , 'C' : 1}, "b6" : {'R' : 1 , 'C' : 2},
            "b7" : {'R' : 2 , 'C' : 0}, "b8" : {'R' : 2 , 'C' : 1}, "b9" : {'R' : 2 , 'C' : 2},
        }

    putXOrZero(currentBox) {
        const changeMatrix = this.state.ticTacToe;
        const mainMatrix = this.state.ticTacToe;
        const row = this.boxPositionsOnMatrix[currentBox].R;
        const column = this.boxPositionsOnMatrix[currentBox].C;

        if(mainMatrix[row][column] === ''){
            changeMatrix[row][column] = this.state.currentInput;
            this.changeToCurrentInput();
        }

        this.setState({ticTacToe : changeMatrix });
        if(this.state.playCount > 4) this.checkForResult();
    }

    changeToCurrentInput() {
        this.setState({currentInput : (this.state.currentInput === 'X')?'0':'X',
                       playCount : this.state.playCount + 1
        });
    }

    checkForResult() {
        if(this.checkDiagnals() || this.checkRows() || this.checkColumns()) return;
        if(this.state.playCount >= 9) this.gameCountinuity('draw');
    }

    checkDiagnals(){
        const mainMatrix = this.state.ticTacToe;
        if((mainMatrix[0][0] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[2][2]) && (mainMatrix[1][1] !== '')) { // Diagnal 1
          this.drawLine('D1'); 
          return true; }
        
        if((mainMatrix[0][2] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[2][0]) && (mainMatrix[1][1] !== '')) {// Diagnal 2   
          this.drawLine('D2');         
          return true;
        }
    }

    checkRows(){
        const mainMatrix = this.state.ticTacToe;
        if((mainMatrix[0][0] === mainMatrix[0][1]) && (mainMatrix[0][1] === mainMatrix[0][2]) && (mainMatrix[0][1] !== '')) { // Row 1
            this.drawLine('R1');
            return true;
        }
        
        if((mainMatrix[1][0] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[1][2]) && (mainMatrix[1][1] !== '')) { // Row 2
            this.drawLine('R2');    
            return true;
        }
        
        if((mainMatrix[2][0] === mainMatrix[2][1]) && (mainMatrix[2][1] === mainMatrix[2][2]) && (mainMatrix[2][1] !== '')) { // Row 3
            this.drawLine('R3');
            return true;
        }
    }

    checkColumns(){
        const mainMatrix = this.state.ticTacToe;
        if((mainMatrix[0][0] === mainMatrix[1][0]) && (mainMatrix[1][0] === mainMatrix[2][0]) && (mainMatrix[1][0] !== '')) { // Column 1
            this.drawLine('C1');
            return true;
        }
        
        if((mainMatrix[0][1] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[2][1]) && (mainMatrix[1][1] !== '')) { // Column 2
            this.drawLine('C2');    
            return true;
        }
        
        if((mainMatrix[0][2] === mainMatrix[1][2]) && (mainMatrix[1][2] === mainMatrix[2][2]) && (mainMatrix[1][2] !== '')) { // Column 3
            this.drawLine('C3');
            return true;
        }
    }
   

    gameCountinuity(currentRoundStatus){
            let whoWon = 0;
            const [playerOne,playerTwo] = [this.state.players.player1,this.state.players.player2];
            const [playerOneWonCount,playerTwoWonCount] = [this.state.players.player1won,this.state.players.player2won];
            const currentRound = this.state.currentRound; 

            if(currentRoundStatus === 'draw'){ 
                alert(`Round ${currentRound} Draw!`);
            }
            else {
                if(this.state.players.player1is === this.state.currentInput) {
                    alert(`${playerTwo} has won Round ${currentRound}`);
                } 
                else {
                    whoWon = 1;
                    alert(`${playerOne} has won Round ${currentRound}`);
                }
            }
            console.log(currentRound);
            this.draw([0,0,0,0]);
            this.setState({
                ticTacToe : [['','',''],
                            ['','',''],
                            ['','','']], 
                currentInput : 'X', 
                playCount : 1,       
                currentRound : currentRound + 1,
                players : { 
                        player1 : playerOne,
                        player2 : playerTwo,
                        player1is : this.state.players.player1is,
                        player2is : this.state.players.player2is,
                        player1won : (currentRoundStatus !== 'draw' && whoWon === 1)? playerOneWonCount + 1 : playerOneWonCount,
                        player2won : (currentRoundStatus !== 'draw' && whoWon === 0)? playerTwoWonCount + 1 : playerTwoWonCount
                    }
            });
       
        if(currentRound >= this.state.setOfMatch){ 
            
            if(playerOneWonCount > playerTwoWonCount) alert(`Hurray, ${playerOne} Won!`);
            else if(playerOneWonCount < playerTwoWonCount) alert(`Hurray, ${playerTwo} Won!`);
            else alert(`Match Draw`);
            setTimeout(() => window.location.reload(),4000);
        }
    }

    linesCoordinates = {
        "D1" : [50,50,1050,1050] , "D2" : [50,1050,1050,50] , "C1" : [200,50,200,1050],  "C2" : [500,50,500,1050],
        "C3" : [800,50,800,1050],"R1":[50,264,1050,264],"R2":[50,552,1050,552],"R3":[50,856,1050,856]
    }

    drawLine(value){ 
        this.draw(this.linesCoordinates[value]);
        setTimeout(() => this.gameCountinuity('won'),1000);
    }

    draw(coordinateArray) {
        const board = document.getElementById('line');
        board.setAttribute('x1',coordinateArray[0]);
        board.setAttribute('y1',coordinateArray[1]);
        board.setAttribute('x2',coordinateArray[2]);
        board.setAttribute('y2',coordinateArray[3]);
    }
  
    
    render() {
        return(
        <div className="wholeComponent">
             <div className="heading">
                 <h1>TIC - TAC - TOE </h1>
                 <h2>{this.state.players.player1} is {this.state.players.player1is} and {this.state.players.player2} is {this.state.players.player2is}</h2>
                 <h2>Total Matches : {this.state.setOfMatch}</h2>
                 <h2>Round {this.state.currentRound} of {this.state.setOfMatch}</h2>
                 <h2>{this.state.players.player1} won : {this.state.players.player1won} and {this.state.players.player2} won : {this.state.players.player2won}</h2>
                 
             </div>
         <div>
            <svg  className="svg">
               <line id="line" className="line" /> 
            </svg>
            <div className="mainBoxBackground">
                <div id="main" className="main">
                     <div className="class">
                     <div className="line1 line"></div>
                     <div className="line2 line"></div>
                     <div className="line3 line"></div>
                     <div className="line4 line"></div>
                   </div>
                   <div className="userInputBox">
                    {/* first row */}
                    <div id="b1" className="box1 box" onClick={() => this.putXOrZero('b1')}>{this.state.ticTacToe[0][0]}</div>
                    <div id="b2" className="box2 box" onClick={() => this.putXOrZero('b2')}>{this.state.ticTacToe[0][1]}</div>
                    <div id="b3" className="box3 box" onClick={() => this.putXOrZero('b3')}>{this.state.ticTacToe[0][2]}</div>
         
                    {/* second row */}
                    <div id="b4" className="box4 box" onClick={() => this.putXOrZero('b4')}>{this.state.ticTacToe[1][0]}</div>
                    <div id="b5" className="box5 box" onClick={() => this.putXOrZero('b5')}>{this.state.ticTacToe[1][1]}</div>
                    <div id="b6" className="box6 box" onClick={() => this.putXOrZero('b6')}>{this.state.ticTacToe[1][2]}</div>


                    {/* third row */}
                    <div id="b7" className="box7 box" onClick={() => this.putXOrZero('b7')}>{this.state.ticTacToe[2][0]}</div>
                    <div id="b8" className="box8 box" onClick={() => this.putXOrZero('b8')}>{this.state.ticTacToe[2][1]}</div>
                    <div id="b9" className="box9 box" onClick={() => this.putXOrZero('b9')}>{this.state.ticTacToe[2][2]}</div>
                    </div>
                   
                </div> 
            </div>
         </div>
        </div>
        )
    }
}
export default ticTacToe;