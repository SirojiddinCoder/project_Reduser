import React from "react";
import StudentClass from './StudentClass'
import './App.css';


var students = [
    {id:1,name:"Sirojiddin",status:"Student"},
    {id:2,name:"Sirojiddin",status:"Student"},
    {id:3,name:"Sirojiddin",status:"Student"},
    {id:4,name:"Sirojiddin",status:"Student"},
    {id:5,name:"Sirojiddin",status:"Student"},
    {id:6,name:"Sirojiddin",status:"Student"},
    {id:7,name:"Sirojiddin",status:"Student"},
    {id:8,name:"Sirojiddin",status:"Student"},
    {id:9,name:"Sirojiddin",status:"Student"},
]

class App extends React.Component{
    render(){
        return(
            <div>
            {
            students.map((value,index)=>{
                return(
                    <StudentClass
                    id={value.id}
                    name={value.name}
                    status={value.status}
                    />
                )
            })
            }

            </div>
        )
    }
}

export default App;