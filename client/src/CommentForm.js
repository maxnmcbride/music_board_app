import { useEffect, useState } from "react";

function CommentForm({discussion, addComment}) {
  const [comment, setComment] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // user_id is being handled on the back end
        post: comment,
        discussion_id: discussion.id
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((addComment));
      }
    });
  }
// do we build out our front end state change with useEffect?
  // useEffect(()=>{

  // })

  return (
    <div className="new_comment">
      <form onSubmit={handleSubmit} className="comment-form">
        {/* <label className="comment_label" htmlFor="comment">username will go here</label> */}
        <input comment="comment" value={comment} placeholder='New Comment' onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Comment</button>
      </form>
    </div>

  );
}

export default CommentForm

