import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EachDiscussion from './EachDiscussion';

function Input() {
    const [input, setInput] = useState("")
    function sendComment(e){
        e.preventDefault()

    }


        
    return (
        <div className="input">
            <input type="text" placeholder="Comment..."></input>
            <div className="send">
               
                
            </div>
        </div>
    )
}

function Discussions() {
    const [discussions, setDiscussions] = useState([])

    useEffect(() => {
        fetch("/discussions")
            .then(r => r.json())
            .then(setDiscussions)
    }, [])

    const mappedDiscussions =
        discussions.map((discussionObj) => {
            return (
                <>
                    <Link to="/EachDiscussion"><h2>{discussionObj.name_of_topic}</h2></Link>
                    {discussionObj.comments.map((commentObj) => {
                        return (
                            <>
                                <h4 key={commentObj.id}>{commentObj.user.username}: {commentObj.post}</h4>
                            </>
                        )
                    })}
                </>
            )

        })

    return (
        <div>
            <nav>
                {/* <Link to="/"><button>Home</button></Link> */}
                <Link to="/userpage"><button>My Profile</button></Link>
                {/* <Link to="/discussions/:discussionName">{discussion.name}</Link> */}
            </nav>
            <h1>All Forums</h1>
            {mappedDiscussions}
            <button OnClick={sendComment}>Submit</button>

            {/* WE need a discussion board built out here, we need
            A text input
            A discussion board
            3 buttons for a Comment(create), Delete (delete/destroy?), and Edit (patch) 
            
            Look at reddit or other discussion boards to see how they are formatted


            to view in browser http://localhost:4000/discussions
            */}

        </div>
    )
}
export default Discussions