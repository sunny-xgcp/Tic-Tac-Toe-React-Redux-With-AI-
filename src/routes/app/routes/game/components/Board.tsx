import * as React from "react";
import {Square} from "./Square";
import {initiate,initiateAI,initiateAIWin,initiateUserWin,resetMoves,changeTurn,gameOver,resetStatus,resetWins} from "../../../../../actions/Actions"
import {connect} from "react-redux";
import "../style/style.scss";
import {AI} from "../AI/AI";
import {Button,Panel} from "react-bootstrap";

interface gameProps{

    moves:[{

        one:"",
            two:"",
            three:"",
            four:"",
            five:"",
            six:"",
            seven:"",
            eight:"",
            nine:""
    }],

    wins:{
      user:false,
      ai:false

    },

    status:{
        gameOver:boolean,
    turn:string

    },

    changeNow:()=>{},
    changeNowAI:()=>{},
    initiateUserWin:()=>{},
    initiateAIWin:()=>{},
    doGameOver:()=>{},
    doChangeTurn:()=>{}

}



export class MainBoard extends React.Component<any,any>{

    Auto_AI:AI;
   

    constructor(props:any){

            super(props);

            this.handleClick=this.handleClick.bind(this);
            this.reset=this.reset.bind(this);
            this.Auto_AI=new AI();

        }


 handleClick=(key:string,value:string)=>{
   
   if(!this.props.status.gameOver){
                if(this.props.status.turn==="user" && value===""){
                   
                    this.props.changeNow(key);
                   
                    this.props.doChangeTurn();
                   
                }

                    
                }


        }

reset(){

    this.props.resetState();
    this.Auto_AI.reset();

}

    render(){

       
        
       var latestMoves=this.props.moves[this.props.moves.length-1];
       var result:any;

       if(this.props.status.gameOver)
            if(this.props.wins.user){

                 result=<Panel style={{marginTop:'8px'}}><div className="result"> You Win!!!</div></Panel>

             }
            else if(this.props.wins.ai){

                result=<Panel style={{marginTop:'8px'}}><div className="result">Computer Wins!!!</div></Panel>

             }
             else{
                 result=<Panel style={{marginTop:'8px'}}><div className="result">No Winner. LOL!</div></Panel>

             }



        return(


     <div>
     
     
     <table>
        <tbody>
         <tr><td colSpan={3} style={{textAlign:'center'}}><Button style={{marginBottom:'4px'}} onClick={this.reset} bsStyle="danger">RESET</Button></td></tr>
         <tr><td colSpan={3} >{result}</td></tr>
        <tr><td><Square key={"one"} _key={"one"} handlePress={this.handleClick} value={latestMoves.one}/></td>
        <td><Square key={"two"} _key={"two"} handlePress={this.handleClick} value={latestMoves.two}/></td>
        <td><Square key={"three"} _key={"three"} handlePress={this.handleClick} value={latestMoves.three}/></td>
        </tr>

        <tr>
        <td> <Square key={"four"} _key={"four"} handlePress={this.handleClick} value={latestMoves.four}/></td>
        <td><Square key={"five"} _key={"five"} handlePress={this.handleClick} value={latestMoves.five}/></td>
        <td><Square key={"six"} _key={"six"} handlePress={this.handleClick} value={latestMoves.six}/></td>
        </tr>

        <tr>
        <td><Square key={"seven"} _key={"seven"} handlePress={this.handleClick} value={latestMoves.seven}/></td>
        <td><Square key={"eight"} _key={"eight"} handlePress={this.handleClick} value={latestMoves.eight}/></td>
        <td><Square key={"nine"}  _key={"nine"} handlePress={this.handleClick} value={latestMoves.nine}/></td>
        </tr>
  </tbody>
  </table>
       
    </div>

        );




    }

    componentDidUpdate(){
         if(!this.props.status.gameOver)
            if(this.checkIfGameEnded())
                return;
        
        if(!this.props.status.gameOver)
            if(this.props.status.turn==="AI"){
                 this.Auto_AI.initiateAI(this.props.moves[this.props.moves.length-1],this.props.changeNowAI);
                  this.props.doChangeTurn();
            }



    }

     private checkIfGameEnded():boolean{
            var latestMoves=this.props.moves[this.props.moves.length-1];
        var count_user=0;
        var count_ai=0;
      
        for(var wp in winningPositions){
 
            if(latestMoves[winningPositions[wp][0]]==="X")
          
                count_user+=1;
             if(latestMoves[winningPositions[wp][1]]==="X")
                count_user+=1;
             if(latestMoves[winningPositions[wp][2]]==="X")
                count_user+=1;

            if(count_user===3){
                count_user=0;
                this.props.doGameOver();
                this.props.userWin();
                return true;
            }

            count_user=0;

             if(latestMoves[winningPositions[wp][0]]==="O")
                count_ai+=1;
             if(latestMoves[winningPositions[wp][1]]==="O")
                count_ai+=1;
             if(latestMoves[winningPositions[wp][2]]==="O")
                count_ai+=1;

                if(count_ai===3){
                    count_ai=0;
               
                 this.props.doGameOver();
                 this.props.aiWin();
                return true;
            }
            count_ai=0;


        }

        for(var val in latestMoves){
            if(latestMoves[val]==="")
                return false
        }

         this.props.doGameOver();
        return true;


    }

    



}

const mapStateToProps=(state:any)=>{

    return({

        moves:state.moves,
        wins:state.wins,
        status:state.status
    });

}

const mapPropsToDispatch=(dispatch:any)=>{

    return(

        {

            changeNow:(key:string)=>{

                dispatch(initiate(key));

            },

            changeNowAI:(key:string)=>{

                dispatch(initiateAI(key));

            }
            ,

            userWin:()=>{

                dispatch(initiateUserWin());
            },

            aiWin:()=>{

                dispatch(initiateAIWin());
            },

             resetState:()=>{

                dispatch(resetMoves());
                dispatch(resetStatus());
                dispatch(resetWins());
            },

            doGameOver:()=>{

                dispatch(gameOver());
            },

            doChangeTurn:()=>{

                dispatch(changeTurn());

            }


            
        }

    )


}

const winningPositions=[

        ["one","two","three"],
        ["four","five","six"],
        ["seven","eight","nine"],
        ["one","four","seven"],
        ["two","five","eight"],
        ["three","six","nine"],
        ["one","five","nine"],
        ["three","five","seven"]
];

export const Board=connect(mapStateToProps,mapPropsToDispatch)(MainBoard);