import React from 'react'

function UserProfile(props) {
    return (
        <div>
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
            <p>{props.user.phone}</p>
            <p>{props.user.company.name}</p>
            <p>{props.user.company.catchPhrase}</p>
        </div>
    )
}

export default UserProfile