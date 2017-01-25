


export const initiate=(key:string)=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"user_move",place:key});


        }


    )



}

export const initiateAI=(key:string)=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"ai_move",place:key});


        }


    )


}

export const initiateUserWin=()=>{

     return(

        (dispatch:any)=>{


            dispatch({type:"user_win"});


        }


    )


}

export const initiateAIWin=()=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"ai_win"});


        }


    )


}

export const resetMoves=()=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"reset_moves", moves:{ one:"",
            two:"",
            three:"",
            four:"",
            five:"",
            six:"",
            seven:"",
            eight:"",
            nine:""}});


        }


    )


}

export const gameOver=()=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"game_over"});


        }


    )


}

export const changeTurn=()=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"change_turn"});


        }


    )


}

export const resetWins=()=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"reset_wins"});


        }


    )


}


export const resetStatus=()=>{

    return(

        (dispatch:any)=>{


            dispatch({type:"reset_status"});


        }


    )


}
