import CommentForm from "./CommentForm"
import { Link } from 'react-router-dom';

function EachDiscussion({selectedDiscussion}) {
    console.log(selectedDiscussion.name_of_topic)
    return (
        <div>
            <nav>
                <Link to="/userpage"><button>My Profile</button></Link>
                <Link to="/discussions"><button>Discussions</button></Link>
            </nav>
            <h1>Welcome to the {selectedDiscussion.name_of_topic} page</h1>
            <CommentForm />
        </div>
    )
}
export default EachDiscussion
