export class AI{


    key:string;
    set:string[];
    firstMove:boolean=true;

     getRandomIntInclusive=(min:number,max:number) =>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    reset=()=>{

        this.key="";
        this.set=undefined;
        this.firstMove=true;

    }

   

    initiateAI=(currentMoves:any,changeNowAI:Function)=>{
      
         var count=0;

         //------------------------------------------------------First Move, Starategy Selector------------------------------------------------
          if(this.firstMove){
            if(this.set===undefined || this.set===null){
             
             console.log("Defining strategy");

             var usedValue="";
           
             //--------At which place has user made his first move----
             for(var value in allPositions){

                 if(currentMoves[allPositions[value]]==="X")
                    usedValue=allPositions[value];
             }

             //-------Ok, Now select a strategy from 12 which doesnt contain the place at which user has already played-----------------------
            for(;;){
                var num=this.getRandomIntInclusive(0,11);
                if(winningTriangles[num].indexOf(usedValue)===-1){
                    this.set=winningTriangles[num];
                    break;
                        
                }
            }

            

        }

        this.key=this.set[0];

        changeNowAI(this.key);
        this.firstMove=false;
        console.log("First move made");
        return;
        
        }


     

        //--------------------------------------------Priority 1: Can a linear line be achieved with a last move? If it can be then play it--------------------------------
             for(var wp in winningPositions){

            if(currentMoves[winningPositions[wp][0]]==="O")
                count+=1;
             if(currentMoves[winningPositions[wp][1]]==="O")
                count+=1;
             if(currentMoves[winningPositions[wp][2]]==="O")
                count+=1;

        //-----------If a final move is possible then play it---------
            if(count===2){
                 if(currentMoves[winningPositions[wp][0]]===""){
                    changeNowAI(winningPositions[wp][0]);
                    console.log("Winning move made");
                    return;
                 }
                if(currentMoves[winningPositions[wp][1]]===""){
                    changeNowAI(winningPositions[wp][1]);
                    console.log("Winning move made");
                    return;
                }
                if(currentMoves[winningPositions[wp][2]]===""){
                    changeNowAI(winningPositions[wp][2]);
                    console.log("Winning move made");
                    return;
                }
                
                
            }
            count=0;

        }


        


       //-----------------------------------------------Priority 2: Is the user about to win?, if Yes then defend it and block the win-------------------------------- 

        for(var wp in winningPositions){

           
            if(currentMoves[winningPositions[wp][0]]==="X")
                count+=1;
             if(currentMoves[winningPositions[wp][1]]==="X")
                count+=1;
             if(currentMoves[winningPositions[wp][2]]==="X")
                count+=1;

          //-------------is the user about to win? if it is then block it--------------------------
            if(count===2){
                 if(currentMoves[winningPositions[wp][0]]===""){
                    changeNowAI(winningPositions[wp][0]);
                    console.log("defensive move made");
                    return;
                 }
                if(currentMoves[winningPositions[wp][1]]===""){
                    changeNowAI(winningPositions[wp][1]);
                    console.log("defensive move made");
                    return;
                }
                if(currentMoves[winningPositions[wp][2]]===""){
                    changeNowAI(winningPositions[wp][2]);
                    console.log("defensive move made");
                    return;
                }
                 
            }
            count=0;

        }
        count=0;

       
        
        //---------------------------------------------------Priority 3: Ok, If a move from the selected strategy is possible then play it--------------------------

        if(!(currentMoves[this.set[1]]==="X") && !(currentMoves[this.set[2]]==="X")){

            if(!(currentMoves[this.set[1]]==="X") && !(currentMoves[this.set[1]]==="O")){
                 changeNowAI(this.set[1]);
                  console.log("Strategical move made");
                 return;
            }

            else if(!(currentMoves[this.set[2]]==="X") && !(currentMoves[this.set[2]]==="O")){
                 changeNowAI(this.set[2]);
                 console.log("Strategical move made");
                 return;
            }
        }

        //-------------------------------------------------OK OK, No choice left, just play a random move------------------------------------------
        
        var played:boolean=false;

        while(!played){
            var randomPlayVal=this.getRandomIntInclusive(0,8);
            if(!(currentMoves[allPositions[randomPlayVal]]==="X") && !(currentMoves[allPositions[randomPlayVal]]==="O")){
                changeNowAI(allPositions[randomPlayVal]);
                played=true;
                console.log("Random move made");
               
            }

        }
         return;







    }



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

/*const positions=[

"one","three","four","five","","seven","nine"

];*/

const allPositions=["one","two","three","four","five","six","seven","eight","nine"];

const winningTriangles=[

    ["one","three","nine"],
    ["one","three","seven"],
    ["one","seven","nine"],
    ["three","seven","nine"],
    ["one","four","five"],
    ["two","four","five"],
     ["two","five","six"],
    ["three","five","six"],
    ["four","seven","eight"],
     ["five","seven","eight"],
      ["five","eight","nine"],
    ["six","eight","nine"]


]
