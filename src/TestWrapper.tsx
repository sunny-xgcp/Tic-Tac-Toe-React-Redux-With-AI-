import * as React from "react";
import * as ReactDom from "react-dom";
import * as Redux from "redux";
import route1 from './routes/app'
import {Provider} from "react-redux";
import Thunk from "redux-thunk";
import {Router, browserHistory} from "react-router";
import {MoveReducer} from "./reducers/MoveReducer";
import {WinReducer} from "./reducers/WinReducer";
import {StatusReducer} from "./reducers/StatusReducer";
import {shallow,mount} from "enzyme";

export const initialState= ()=>{

    return({
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
        gameOver:false,
        turn:"user"

    },
  

})
    
}

var moveReducer=new MoveReducer();
var winReducer=new WinReducer();
var statusReducer=new StatusReducer();

var routes= route1;


const rootReducer = Redux.combineReducers({moves: moveReducer.move_reducer, wins:winReducer.winReducer,status:statusReducer.status_Reducer});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

var store = Redux.createStore(rootReducer, initialState(), composeEnhancers(Redux.applyMiddleware(Thunk)));



export function createShallow(component:JSX.Element){

    return(

        shallow(<Provider store={store}>
            {component}
    </Provider>)

    );


}

export function createMount(component:JSX.Element){

    return(
        mount(

            <Provider store={store}>
            {component}
    </Provider>

        )


    );

}