import React from 'react'

function Posts(props) {
    return (
        <ul>
        {
            props.posts.map(post => {
                return <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            })
        }
        </ul>
    )
} 

export default Posts