import React from 'react'
import UserCard from './UserCard'
import styled from 'styled-components'

const List = styled.div`

display:flex;
justify-content: space-evenly;
flex=flow: row wrap;
width:80%;
margin: auto;
`
const UserList = props => {
    return (
        <List>
            {
                props.users.map( user => {
                 return   <UserCard user={user}/>
                }
                    
                )
            }
        </List>
    )
}

export default UserList