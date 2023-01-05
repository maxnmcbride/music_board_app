import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

function Comment() {
    // pass user prop
    // const [comments, setComments] = useState([])
    // console.log(comments)

    // fetch to backend server build out CRUD, Need to create 
    // custom routes in rails

    return (
        <div>
            <h1 className="comments-title">Comments</h1>
            <div className="comment-form-title">Write Comment</div>
                <CommentForm/>
            <div className="comments-container">
            </div>
        </div>
    )
}
export default Comment