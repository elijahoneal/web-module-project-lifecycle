import './App.css';
import React from 'react';
import axios from 'axios'
import UserCard from './UserCard'
class App extends React.Component {

  state = {
    users: [],
    gitHubUser: 'elijahoneal'
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.gitHubUser}`)
    .then( res => {
      console.log(res.data)
      this.setState({...this.state, users: res.data})
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  componentDidUpdate(prevState) {
    if(prevState.gitHubUser !== this.state.gitHubUser){
      axios.get(`https://api.github.com/users/${this.state.gitHubUser}`)
    .then( res => {
      console.log(res.data)
      this.setState({...this.state, users: res.data})
    })
    .catch(err => {
      console.log(err.message)
    })
    }
  }
  render(){
    return(
      <>
      <h1>Usercard</h1>
         <UserCard user = {this.state.users} />
         <div>
        <h2>Change User</h2>
        <button onClick={() =>{this.setState({...this.state, gitHubUser: 'elijahoneal'})}}>Lambda Student: elijahoneal</button>
        <button onClick={() =>{this.setState({...this.state, gitHubUser: 'tetondan'})}}>Lambda Instructor: tetondan</button>
        <button onClick={() =>{this.setState({...this.state, gitHubUser: 'dustinmyers'})}}>Lambda Instructor: dustinmyers</button>
        <button onClick={() =>{this.setState({...this.state, gitHubUser: 'justsml'})}}>Lambda Instructor: justsml</button>
        <button onClick={() =>{this.setState({...this.state, gitHubUser: 'luishrd'})}}>Lambda Instructor: luishrd</button>
        <button onClick={() =>{this.setState({...this.state, gitHubUser: 'bigknell'})}}>Lambda Instructor: bigknell</button>
        </div>
         {/* tetondan
    dustinmyers
    justsml
    luishrd
    bigknell */}
     
     
      </>
    )
  }
}

export default App;
