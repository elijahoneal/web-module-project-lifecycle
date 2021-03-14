import './App.css';
import React from 'react';
import axios from 'axios'
import UserList from './components/UserList'
class App extends React.Component {

  state = {
    users: [], 
    followers: ['elijahoneal','tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']
  }
  componentDidMount() {
      this.state.followers.forEach( user => {
        axios.get(`https://api.github.com/users/${user}`)
        .then( res => {
          this.setState({users:[...this.state.users, res.data]})
        })
        .catch(err => {
          console.log(err.message)
        })
      })

  }
  


  // componentDidUpdate(prevState) {
  //   if(prevState.gitHubUser !== this.state.gitHubUser){
  //     axios.get(`https://api.github.com/users/${this.state.gitHubUser}`)
  //   .then( res => {

  //     this.setState({...this.state, users: res.data})
  //   })
  //   .catch(err => {
  //     console.log(err.message)
  //   })
  //   }
  // }
  render(){
    return(
      <>
      <h1>Usercard</h1>
         <UserList users = {this.state.users} />
      </>
    )
  }
}

export default App;
