import React from 'react'

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand h1 m-2 text-warning" href="/">SwiftDash</a>
            <ul className="navbar-nav">
                <li className="nav-item"><button className="btn btn-sm btn-secondary m-2" onClick={() => props.logOut()}>Logout</button></li>
            </ul>
        </nav>
    )
}

export default Header