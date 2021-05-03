import React, { useState } from 'react'
import '../baser.css'
//import Pic from './mercury2.png'


const Posts = ({ posts, loading, button }) => {
    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        //The initial state of the button is false i.e line 7
        setActive(!isActive); //This line sets the state to true

    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (

        <ul className='list-group mb-4'>


            {posts.map((post, index) => {
                const html_render = {
                    __html: post.question + "<br/>" +
                        post.options[0] + "<br/>" +
                        post.options[1] + "<br/>" +
                        post.options[2] + "<br/>" +
                        post.options[3] + "<br/>"
                }

                return (
<li key={post.id} className='list-group-item questions' style={{ backgroundColor: 'rgba(2, 10, 10, 0.801)', color: 'whitesmoke' }}>
    <div dangerouslySetInnerHTML={html_render}>
    </div>
    {/* The handleToggle() below is the function to be fired when the button is clicked */}
    {/* But in this case, the handleToggle() is fired for all the array elements */}
    <button className='collapser' onClick={() => {
        console.log('This index ' + index + ' was clicked and post id is ' + post.id)
        //if(index === post.i)
        handleToggle()
    }}>View Answer
    </button>
    <div dangerouslySetInnerHTML={{ __html: '<p>' + post.Ans + '</p>' }} className={`collapsed_content ${(isActive) ? "show_me" : "hide_me"}`}>

    </div>
</li>
                )
            })
            }

        </ul>
    )

}

export default Posts


