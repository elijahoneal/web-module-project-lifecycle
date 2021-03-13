import React from 'react'

const UserCard = ({user}) => {
 
        return(
            <div>
                <img src = {user.avatar_url} alt="profile pic"></img>
                <article>
                    <h3>Name: {user.name}</h3>
                    <h5>Username: {user.username}</h5>
                    <p>Location: {user.location}</p>
                    <p>Profile: <a href={user.url}>View User</a></p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Bio: {user.bio}</p>
                </article>
            </div>
        )
    
}

export default UserCard