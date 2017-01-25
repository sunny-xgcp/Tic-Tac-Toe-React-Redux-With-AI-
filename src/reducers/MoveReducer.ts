import {initialState} from "../initialState";

export class MoveReducer{

    
    move_reducer=(state:any, action:any)=>{

        var new_state=(<any>Object).assign([],state);
        switch (action.type){

            case "user_move":{

                var data=(<any>Object).assign({},new_state[new_state.length-1]);
                data[action.place]="X";
                new_state.push(data);
                return new_state;
            }
            

            case "ai_move":{

                 var data=(<any>Object).assign({},new_state[new_state.length-1]);
                data[action.place]="O";
                new_state.push(data);
                return new_state;


            }                

            case "reset_moves":{

                new_state.push(action.moves);
                return new_state;


            }                


            default:
                return state || initialState().moves;

        }



          


    }

}