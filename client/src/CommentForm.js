import {useState} from 'react';

function CommentForm (){
    const[comment, setComment]=useState("");
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const onChange = (e) => {
        setComment(e.target.value)
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <textarea className="comment-form-textarea" value={comment} onChange={onChange}></textarea>
        </form>
        </>
    )
}

export default CommentForm