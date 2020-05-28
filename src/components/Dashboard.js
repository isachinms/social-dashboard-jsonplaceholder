import React from 'react'
import axios from '../config/axios'

import Userprofile from './UserProfile'
import Posts from './Posts'
import Header from './Header'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            posts: [],
            isPostsLoading: true
        }
    }

    componentDidMount() {
        axios.get(`/posts?userId=${this.state.user.id}`)
            .then((response) => {
                const posts = response.data
                this.setState({ posts, isPostsLoading: false })
            })
    }

    componentWillUnmount() {
        this.setState({ isPostsLoading: false})
    }

    logOut = () => {
        localStorage.removeItem('user')
        this.setState({ user: ''})
        this.props.history.push('/')
        alert('Logged Out Successfully')
    }

    render() {
        const { user, posts, isPostsLoading } = this.state
        return (
                <div className="container">
                    <Header logOut={this.logOut} /><hr/>
                    <div className="card bg-light mb-5">
                        <div className="card-body">
                            <Userprofile user={user} /><hr/>
                            { isPostsLoading ? (
                                <div className="d-flex justify-content-center my-5">
                                    <pre className="text-primary">Loading Posts... <span className="spinner-border spinner-border-sm mt-1"></span></pre>
                                </div>
                                ): <Posts posts={posts}/> }
                        </div>
                    </div>
                </div>
        )
    }
}

export default Dashboard