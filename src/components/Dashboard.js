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
                <div>
                    <Header logOut={this.logOut} />
                    <Userprofile user={user} />
                    { isPostsLoading ? <p>Please wait while posts being loaded...</p> : <Posts posts={posts}/> }
                </div>
        )
    }
}

export default Dashboard