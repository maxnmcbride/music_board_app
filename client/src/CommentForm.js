import { useEffect, useState } from "react";

function CommentForm({discussion}) {
  const [comment, setComment] = useState("");


  console.log(discussion)

  // const user = discussion.map((discussionObj)=>{
  //   console.log(discussionObj)
  // })

  // console.log(user)

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: comment,
        // user_id: user.id,
        discussion_id: discussion.id
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log(data));
      }
    });
  }

  return (
    <div className="new_comment">
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="comment">username will go here</label>
        <input comment="comment" value={comment} placeholder='New Comment' onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Comment</button>
      </form>
    </div>

  );
}

export default CommentForm

