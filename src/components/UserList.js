import React from 'react'
import UserCard from './UserCard'

const UserList = props => {
    return (
        <div>
            {
                props.users.map( user => {
                 return   <UserCard user={user}/>
                }
                    
                )
            }
        </div>
    )
}

export default UserList