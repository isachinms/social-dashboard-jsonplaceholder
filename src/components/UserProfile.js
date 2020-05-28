import React from 'react'

function UserProfile(props) {
    return (
        <div className="alert alert-warning">
            <div className="row">
                <div className="col-6 pl-3">
                    <p className="display-4 text-success">{props.user.name}</p>
                    <p className="display-5 mb-1 pl-2 text-primary">{props.user.email}</p>
                    <p className="display-5 mb-1 pl-2 text-primary">{props.user.phone}</p>
                </div>
                <div className="col-6 pr-3 pt-3 text-right text-danger">
                    <p className="h1">{props.user.company.name}</p>
                    <small>- {props.user.company.catchPhrase}</small>
                </div>
            </div>  
        </div>
    )
}

export default UserProfile