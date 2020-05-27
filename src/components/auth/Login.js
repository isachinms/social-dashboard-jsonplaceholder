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
                    this.setState({ errorMessage: 'Enter a valid email address' })
                }
            })
    }

    render() {
        return (
            localStorage.getItem('user') ? <Redirect to="/social-dashboard" /> : (
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="email">Email </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
                    <div className="invalid-feedback">{this.state.errorMessage}</div>
                    <input type="submit" />
                </form>
            )
        )
    }
}

export default Login