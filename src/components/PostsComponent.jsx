import React, { useState } from 'react'


/*
THIS COMPONENT RECEIVES A SINGLE QUESTION AND RENDER IT ANYHOW YOU DEFINE


*/
function PostsComponent({ post }) {
    const [isAnswerShowing, toggleAnswerShowing] = useState(false);

    console.log(isAnswerShowing)

    return (
        <div>
            {post.question}
            {post.options.map((option, i) => (
                <ul key={i}>
                    <li>{option}</li>
                </ul>
            ))
            }
            <button onClick={() => toggleAnswerShowing(!isAnswerShowing)}>Show answer</button>
            {isAnswerShowing && (<p style={{color: 'green'}}>{post.Ans}</p>)}
        </div>
    )
}

export default PostsComponent
