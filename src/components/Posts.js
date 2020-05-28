import React from 'react'

function Posts(props) {
    return (
        <ul className="list-group list-group-flush">
        {
            props.posts.map(post => {
                return (
                    <li className="list-group-item bg-white mb-1 pb-1" key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                )
            })
        }
        </ul>
    )
} 

export default Posts