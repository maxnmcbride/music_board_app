import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

// what props do we need to pass?
function CommentForm({postedComments}) {
    
    const [comment, setComment] = useState("")

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        let newComment = {
            comment: comment,
        }

    // build out backend routes and controller for comments
    // NEED FULL CRUD AND CONNECTION TO BACKEND
    fetch("/createcomment",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newComment)
    })
    .then(r => r.json())
    .then((newComment) => { 
      postedComments(newComment)
      navigate("/Comments")})
    }

    return (
        <form onSubmit={handleSubmit} className="comment-form">


        <label htmlFor="comment">username will go here</label>
        <input comment="comment" value={comment} placeholder='New Comment' onChange= {(e) => setComment(e.target.value)}/>
  
        <button type="submit">Comment</button>
  
      </form>
  
    );
}

export default CommentForm;




// import {useState} from 'react';

// function CommentForm (){
//     const[comment, setComment]=useState("");
//     const onSubmit = (e) => {
//         e.preventDefault()
//     }
//     const onChange = (e) => {
//         setComment(e.target.value)
//     }
//     return(
//         <>
//         <form onSubmit={onSubmit}>
//             <textarea className="comment-form-textarea" value={comment} onChange={onChange}></textarea>
//         </form>
//         </>
//     )
// }

// export default CommentForm