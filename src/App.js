import React, { Component } from 'react';
import './App.css';
import Person from "./components/Person"

class App extends Component {
  state = {
    otherProp : "qualsiasi cosa",
    persons : [{
      name : "Gustavo Fring",
      age : 45,
    },
    {
      name : "Saul Goodman",
      age : 46,
    },
    {
      name : "Walter White",
      age : 35,
    }]
  }

  changeName = (newName,name2) =>{
    //this.state.persons[0].name = "CIccio" //DON'T TRY THIS AT HOME!!! 
    this.setState({       
      persons : [{
        name : newName,
        age : 45,
      },
      {
        name : name2,
        age : 46,
      },
      {
        name : "Walter White",
        age : 35,
      }]
    })

    console.log("clicked!", this.state)
  }


  changedEvent = (event) =>{
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <button 
          onClick={ 
            () => {
              console.log("Ciao!")
              this.changeName('Pippone',"Nome 2")
            } 
          } >
          Change name
        </button>

        <Person
          changed={
            (ev)=> this.changedEvent(ev) 
          }
          click={
            () => {
              console.log("Ciao!")
              this.changeName('Pippone',"Nome 2")
              }
          }  
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />

        <Person click={this.changeName.bind(this,'Gino2')}  name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person click={this.changeName.bind(this,'Gino3')}  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
