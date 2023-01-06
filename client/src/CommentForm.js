// import React, {useState} from 'react';

// function CommentForm({selectedDiscussion, user}) {

//   console.log(user)
    
//     const [comment, setComment] = useState("")

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         let newComment = {
//             post: comment,
//             user_id: user.id,
//             discussion_id:selectedDiscussion.id
//         }

//     // build out backend routes and controller for comments
//     // NEED FULL CRUD AND CONNECTION TO BACKEND
//     fetch("/comments",{
//       method: "POST",
//       headers: {"Content-Type" : "application/json"},
//       body: JSON.stringify(newComment)
//     })
//     .then(r => r.json())
//     .then((newComment) => { 
// })
//     }

//     return (
//         <form onSubmit={handleSubmit} className="comment-form">

//         <label htmlFor="comment">username will go here</label>
//         <input comment="comment" value={comment} placeholder='New Comment' onChange= {(e) => setComment(e.target.value)}/>
  
//         <button type="submit">Comment</button>
  
//       </form>
  
//     );
// }

// export default CommentForm;







import { useEffect, useState } from "react";

function CommentForm({ Discussion, user }) {
  const [comment, setComment] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("/userPage")
      .then((r) => r.json())
      .then(setComment);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    let newComment = {
        post: comment,
        user_id: user.id,
        discussion_id: Discussion.id
            };
    fetch("/discussion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newComment) => {
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

    return (
      <div className="new_comment">
        <form onSubmit={handleSubmit} className="comment-form">

          <label htmlFor="comment">username will go here</label>
          <input comment="comment" value={comment} placeholder='New Comment' onChange= {(e) => setComment(e.target.value)}/>  
          <button type="submit">Comment</button>

        </form>
      </div>  
    );
}

export default CommentForm











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