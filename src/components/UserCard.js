import React from 'react'
import styled from 'styled-components'

const Card =styled.div`
display:flex;
flex-direction: column;
width:25%;
    h3{
        font-size: 1.3rem;
        text-align:center;
    }
`
const UserCard = ({user}) => {
    console.log(user)
        return(
            <Card>
                <h3>{user.name}</h3>
                <img src = {user.avatar_url} alt="profile pic"></img>
                <article>
                    <p>{user.location}</p>
                    <p><a href={user.url}>View Profile</a></p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Bio: {user.bio}</p>
                </article>
            </Card>
        )
    
}

export default UserCard