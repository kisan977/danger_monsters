import React, { Component } from 'react'
import Card from './Card';
import SearchBox from './SearchBox';

 class App extends Component {
   constructor(){
     super();
     this.state={
       monsters:[],
       SearchField:''
     }
   }
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response=>Response.json())
  .then(users=>{
    this.setState({monsters:users})
  })
}





  render() {
    const{monsters,SearchField}=this.state;
 const filterdMonster = monsters.filter(monster=>
  monster.name.toLowerCase().includes(SearchField.toLowerCase()));




    return (
      <div className='App'>
        <h1>Danger Monsters</h1>
        <SearchBox
        placeholder='search Monsters'
        handleChange = {e=>this.setState({SearchField:e.target.value})}
      
        />
        <Card monsters={filterdMonster}/>
       
        
      </div>
    )
  }
}

export default App;
