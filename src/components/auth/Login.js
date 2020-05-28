import React from 'react'
import axios from '../../config/axios'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            errorMessage: ''
        }
    }

    handleChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.get('/users')
            .then((response) => {
                const user = response.data.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())
                if(user) {
                    this.setState({ email: ''})
                    localStorage.setItem('user', JSON.stringify(user))
                    this.props.history.push('/social-dashboard')
                    alert('Logged in successfully')
                } else {
                    this.setState({ errorMessage: 'Enter a valid email' })
                }
            })
    }

    render() {
        const { errorMessage } = this.state
        return (
            localStorage.getItem('user') ? <Redirect to="/social-dashboard" /> : (
                <div className="container bg-light col-md-4 pb-1">
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <h1 className="text-secondary mt-5 pt-3 mb-3 text-center">LOGIN</h1>
                        <input className={`form-control ${errorMessage && 'is-invalid'}`} type="text" placeholder="Enter email to login" id="email" value={this.state.email} onChange={this.handleChange} />
                        <div className="invalid-feedback">{errorMessage}</div>
                        <input className="btn btn-primary btn-block my-3" type="submit" />
                    </form>
                </div>
            )
        )
    }
}

export default Login