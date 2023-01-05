import CommentForm from "./CommentForm"
import { Link } from 'react-router-dom';

function EachDiscussion() {
    return (
        <div>
            <nav>
                <Link to="/userpage"><button>My Profile</button></Link>
                <Link to="/discussions"><button>Discussions</button></Link>
            </nav>
            <h1>Welcome to the TOPIC NAME page</h1>
            <CommentForm />
        </div>
    )
}
export default EachDiscussion
