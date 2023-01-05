import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function CommentForm({postedComments}) {
    
    const [comment, setComment] = useState("")

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        let newComment = {
            comment: comment,
        }

    fetch("http://localhost:4000/comments",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newComment)
    })
    .then(r => r.json())
    .then((newComment) => { 
      postedCharacters(newComment)
      navigate("/Comments")})
    }

    return (
        <form onSubmit={handleSubmit} className="comment-form">


        <label htmlFor="comment">${username}: </label>
        <input comment="comment" value={name} placeholder='New Comment' onChange= {(e) => setComment(e.target.value)}/>
  
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