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
