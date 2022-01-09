import React from "react";
import StudentClass from './StudentClass'
class App extends React.Component{
    render(){
        return(
            <div>
               <StudentClass name="Sirojiddin" id={1}/>
               <StudentClass />
               <StudentClass />
               <StudentClass />
               <StudentClass />
               <StudentClass />
            </div>
        )
    }
}

export default App;