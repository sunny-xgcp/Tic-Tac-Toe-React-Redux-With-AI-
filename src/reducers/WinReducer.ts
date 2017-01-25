import {initialState} from "../initialState";

export class WinReducer{

    winReducer=(state:any,action:any)=>{

         var new_state=(<any>Object).assign({},state);

         switch(action.type){

                 case "user_win":{

                new_state.user=true;
                return new_state;


            }

             case "ai_win":{

                new_state.ai=true;
                return new_state;


            }

             case "reset_wins":{

                new_state.ai=false;
                new_state.user=false;
                return new_state;


            }


            default:
                return state || initialState().moves;


         }

    }

}