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
        const numberOfPlay = parseInt(prompt("Sets of Play?"));

        
        this.setState({
            players : { player1 : player1Name,
                        player2 : player2Name,
                        player1is : 'X',
                        player2is : '0',                   
                        player1won : 0,
                        player2won : 0 
                     },
            setOfMatch : numberOfPlay
        
        });
        }
        
    

    putXOrZero(currentBox) {
        const changeMatrix = this.state.ticTacToe;
        const mainMatrix = this.state.ticTacToe;
        if(currentBox === 'b1' && mainMatrix[0][0] === '') { changeMatrix[0][0] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b2' && mainMatrix[0][1] === '') { changeMatrix[0][1] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b3' && mainMatrix[0][2] === '') { changeMatrix[0][2] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b4' && mainMatrix[1][0] === '') { changeMatrix[1][0] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b5' && mainMatrix[1][1] === '') { changeMatrix[1][1] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b6' && mainMatrix[1][2] === '') { changeMatrix[1][2] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b7' && mainMatrix[2][0] === '') { changeMatrix[2][0] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b8' && mainMatrix[2][1] === '') { changeMatrix[2][1] = this.state.currentInput; this.changeToCurrentInput(); }
        if(currentBox === 'b9' && mainMatrix[2][2] === '') { changeMatrix[2][2] = this.state.currentInput; this.changeToCurrentInput(); }

        this.setState({ticTacToe : changeMatrix });
        if(this.state.playCount > 4) this.checkForResult();
    }

    changeToCurrentInput() {
        this.setState({currentInput : (this.state.currentInput === 'X')?'0':'X',
                       playCount : (this.state.playCount > 7) ? 0 : this.state.playCount + 1 
    });
    }
    
    drawLine(value){ 
        if(value === 'D1') this.draw(50,50,1050,1050);
        else if(value === 'D2') this.draw(50,1050,1050,50);
        else if(value === 'C1') this.draw(200,50,200,1050);
        else if(value === 'C2') this.draw(500,50,500,1050);
        else if(value === 'C3') this.draw(800,50,800,1050);
        else if(value === 'R1') this.draw(50,264,1050,264);
        else if(value === 'R2') this.draw(50,552,1050,552);
        else if(value === 'R3') this.draw(50,856,1050,856);
        setTimeout(() => this.gameCountinuity(),1000);
    }

    draw(x1,y1,x2,y2) {
        const toDrawOn = document.getElementById('line');
        toDrawOn.setAttribute('x1',x1);
        toDrawOn.setAttribute('y1',y1);
        toDrawOn.setAttribute('x2',x2);
        toDrawOn.setAttribute('y2',y2);
    }

    gameCountinuity(){
            let whoWon = 0;
            if(this.state.players.player1is === this.state.currentInput) {
                alert(`${this.state.players.player2} has won Round ${this.state.currentRound}`);
                this.draw(0,0,0,0);
            } 
            else {
                whoWon = 1;
                alert(`${this.state.players.player1} has won Round ${this.state.currentRound}`);
                this.draw(0,0,0,0);
            }
            this.setState({
                ticTacToe : [['','',''],
                            ['','',''],
                            ['','','']], 
                currentInput : 'X', 
                playCount : 1,       
                currentRound : this.state.currentRound + 1,
                players : { 
                        player1 : this.state.players.player1,
                        player2 : this.state.players.player2,
                        player1is : this.state.players.player1is,
                        player2is : this.state.players.player2is,
                        player1won : (whoWon === 1)? this.state.players.player1won + 1 : this.state.players.player1won,
                        player2won : (whoWon === 0)? this.state.players.player2won + 1 : this.state.players.player2won
                    }
            });
       
        if(this.state.currentRound > this.state.setOfMatch){ 
            
            if(this.state.players.player1won > this.state.players.player2won) alert(`Hurray, ${this.state.players.player1} Won!`);
            else alert(`Hurray, ${this.state.players.player2} Won!`);

            setTimeout(() => window.location.reload(),4000);
        }
    }

    checkForResult() {
       this.checkDiagnals()
       this.checkRows()
       this.checkColumns()
    }

    checkDiagnals(){
        const mainMatrix = this.state.ticTacToe;
        if((mainMatrix[0][0] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[2][2]) && (mainMatrix[1][1] === '0' || mainMatrix[1][1] === 'X')) // Diagnal 1
            this.drawLine('D1');
        
        if((mainMatrix[0][2] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[2][0]) && (mainMatrix[1][1] === '0' || mainMatrix[1][1] === 'X')) // Diagnal 2   
            this.drawLine('D2');         
    }

    checkRows(){
        const mainMatrix = this.state.ticTacToe;
        if((mainMatrix[0][0] === mainMatrix[0][1]) && (mainMatrix[0][1] === mainMatrix[0][2]) && (mainMatrix[0][1] === '0' || mainMatrix[0][1] === 'X'))  // Row 1
            this.drawLine('R1');
        
        if((mainMatrix[1][0] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[1][2]) && (mainMatrix[1][1] === '0' || mainMatrix[1][1] === 'X'))  // Row 2
            this.drawLine('R2');    
        
        if((mainMatrix[2][0] === mainMatrix[2][1]) && (mainMatrix[2][1] === mainMatrix[2][2]) && (mainMatrix[2][1] === '0' || mainMatrix[2][1] === 'X'))  // Row 3
            this.drawLine('R3');
    }

    checkColumns(){
        const mainMatrix = this.state.ticTacToe;
        if((mainMatrix[0][0] === mainMatrix[1][0]) && (mainMatrix[1][0] === mainMatrix[2][0]) && (mainMatrix[1][0] === '0' || mainMatrix[1][0] === 'X'))  // Column 1
            this.drawLine('C1');
        
        if((mainMatrix[0][1] === mainMatrix[1][1]) && (mainMatrix[1][1] === mainMatrix[2][1]) && (mainMatrix[1][1] === '0' || mainMatrix[1][1] === 'X'))  // Column 2
            this.drawLine('C2');    
        
        if((mainMatrix[0][2] === mainMatrix[1][2]) && (mainMatrix[1][2] === mainMatrix[2][2]) && (mainMatrix[1][2] === '0' || mainMatrix[1][2] === 'X'))  // Column 3
            this.drawLine('C3');
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