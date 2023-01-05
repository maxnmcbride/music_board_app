import CommentForm from "./CommentForm"
import { Link } from 'react-router-dom';

// build fetch to get comments
// displayed comments will have to have discussions_id~comment_id

// build out delete and edit in here

function EachDiscussion({ selectedDiscussion, user }) {
    const comment = selectedDiscussion.comments.map((commentObj) => {
        return (
            <> <h4 key={commentObj.id}>{commentObj.user.username}: {commentObj.post}</h4> </>
        )
    })

    return (
        <div>
            <nav>
                <Link to="/userpage"><button>My Profile</button></Link>
                <Link to="/discussions"><button>Discussions</button></Link>
            </nav>
            <h1>{selectedDiscussion.name_of_topic}</h1>
            {comment}
            <CommentForm selectedDiscussion={selectedDiscussion} user={user}/>
        </div>
    )
}
export default EachDiscussion
