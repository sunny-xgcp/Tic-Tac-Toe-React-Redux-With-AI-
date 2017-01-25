import * as React from "react";


export class Square extends React.Component<any,any>{

    constructor(props:any){
        super(props);

        this.handleClick=this.handleClick.bind(this);


        
    }


    
    handleClick= (e:any)=>{

        this.props.handlePress(this.props._key,this.props.value);
        

    }


    render(){

        return(

            <div className="square"  onClick={this.handleClick}>

                {this.props.value}
            </div>

        )

    }
    

}