import './App.css';
import React from 'react';
import axios from 'axios'
import UserCard from './UserCard'
class App extends React.Component {

  state = {
    users: []
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/elijahoneal')
    .then( res => {
      console.log(res.data)
      this.setState({...this.state, users: res.data})
    })
    .catch(err => {
      console.log(err.message)
    })
  }
  render(){
    return(
      <>
      <h1>Usercard</h1>
    
         <UserCard user = {this.state.users} />
    
     
     
      </>
    )
  }
}

export default App;
