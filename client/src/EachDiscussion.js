import CommentForm from "./CommentForm"
import { Link } from 'react-router-dom';

// build out delete and edit in here

function EachDiscussion({ selectedDiscussion, user }) {
    const handleDelete = (commentObj) => {
        console.log(commentObj)
            //we want to send delete request
            //remove from state 
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
                <Link to="/discussions"><button>Discussions</button></Link>
            </nav>
            <h1>{selectedDiscussion.name_of_topic}</h1>
            <div>
            {commentsArray}
            </div>
            <CommentForm selectedDiscussion={selectedDiscussion} user={user}/>
        </div>
    )
}
export default EachDiscussion
