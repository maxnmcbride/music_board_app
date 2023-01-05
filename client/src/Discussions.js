import { useState, Link } from 'react-router-dom';
import Comment from './Comment';

function Discussions(){
    return(
        <div>
            <nav>
                {/* <Link to="/"><button>Home</button></Link> */}
                <Link to="/userpage"><button>My Profile</button></Link>
            </nav>
            <h1>All Forums</h1>
            
            <div className="comment_form">
               <h1>Hello</h1>
               <Comment/>
               {/* we need to pass user id so only logged in users can leave comment
               and it will allow other users to see user */}
            </div>

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