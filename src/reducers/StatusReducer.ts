import {initialState} from "../initialState";

export class StatusReducer{

    status_Reducer=(state:any,action:any)=>{

         var new_state=(<any>Object).assign({},state);

         switch(action.type){

                 case "change_turn":{

                if(new_state.turn==="user")
                    new_state.turn="AI";
                else
                    new_state.turn="user";

                return new_state;


            }

             case "game_over":{

                new_state.gameOver=true;
                return new_state;


            }

             case "reset_status":{

                new_state.gameOver=false;
                new_state.turn="user";
                return new_state;


            }


            default:
                return state || initialState().status;


         }

    }

}