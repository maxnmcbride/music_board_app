import CommentForm from "./CommentForm"
import { Link } from 'react-router-dom';

// build out delete and edit in here

function EachDiscussion({ setSelectedDiscussion, selectedDiscussion, user }) {
    const handleDelete = (commentObj) => {
        console.log(commentObj)
        //we want to send delete request
        //remove from state 
        //send delete request
        fetch(`/comments/${commentObj.id}`, { method: 'DELETE' })
        // change state to original values
        setSelectedDiscussion(false)
    }

    const commentsArray = selectedDiscussion.comments.map((commentObj) => {
        return (
            <>
                <h4 key={commentObj.id}>{commentObj.user.username}: {commentObj.post}</h4>
                <button onClick={() => handleDelete(commentObj)}>x</button>
            </>
        )
    })

    return (
        <div>
            <nav>
                <Link to="/userpage"><button>My Profile</button></Link>
                <Link to="/board"><button>Back to Discussions</button></Link>
            </nav>
            <h1>{selectedDiscussion.name_of_topic}</h1>
            <div>
                {commentsArray}
            </div>
            <CommentForm setSelectedDiscussion={setSelectedDiscussion} selectedDiscussion={selectedDiscussion} user={user} />
        </div>
    )
}
export default EachDiscussion
