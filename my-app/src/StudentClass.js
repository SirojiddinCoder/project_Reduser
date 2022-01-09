import React from "react";

class StudentClass extends React.Component{
    render(){
        return(

             <div>
              <div>ID:{this.props.id}</div>
              <div>Name:{this.props.name}</div>
             </div>
        )
    }
}

export default StudentClass;