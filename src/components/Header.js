import React from 'react'

function Header(props) {
    return (
        <ul>
            <li><h1>SwiftDash</h1></li>
            <li><button onClick={() => props.logOut()}>Logout</button></li>
        </ul>
    )
}

export default Header