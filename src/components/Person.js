import React from "react";

const Person = (props) => {

     return (
          <h1 onClick={props.click}>Hello my name is: {props.name} 
               <div>
                    age : {props.age}
               </div>
               <input type="text" onChange={props.changed} />
               <p>{props.children}</p>
          </h1>) ;
}

export default Person;
