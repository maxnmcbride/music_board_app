import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import CommentForm from "./CommentForm"

function Discussion() {
    const param = useParams()
    const { id } = param
    const [discussion, setDiscussion] = useState({})

    console.log(discussion.comments)

    const editCommentInDiscussion = (freshComment) => {
        // console.log('ready to change this comment', freshComment)
        const discussionComments = discussion.comments.map((commentObj)=>{
            return  commentObj.id == freshComment.id ? freshComment : commentObj
        })
        const copyOfDiscussion = { ...discussion, comments: discussionComments}
        setDiscussion(copyOfDiscussion)
    }

    useEffect(() => {
        fetch(`/discussions/${id}`)
            .then(r => r.json())
            .then(setDiscussion)
    }, [])

    const addCommentToDiscussion = (comment) => {
        const copyOfDiscussion = { ...discussion, comments: [...discussion.comments, comment] }
        setDiscussion(copyOfDiscussion)
        // console.log("totally ready to add this comment to discussion", comment )
    }

    const [showEditForm, setShowEdit] = useState(false)

    const showForm = () => setShowEdit(!showEditForm);


    const EditForm = (comment) => {
        const [newComment, setNewComment] = useState(comment.comment.post)
        const patchComment = (e) => {
            e.preventDefault()
            fetch(`/comments/${comment.comment.id}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        post: newComment
                    })
                })
                .then(r => r.json())
                .then((updatedComment) => {
                    editCommentInDiscussion(updatedComment)
                })
        }

        return (
            <div>
                <form onSubmit={patchComment}>
                    <input placeholder={comment.comment.post} onChange={(e) => { setNewComment(e.target.value) }} />
                    <input type="submit" value="Edit" />
                </form>
            </div>
        )
    }

    return (
        <div>
            <Link className="links" to="/userpage"><button>My Profile</button></Link>
            <Link className="links" to="/board"><button>Discussions</button></Link>
            <div className="discussion_pages">
                <div className="comment_section">
                    <h1 className="discussion_title">{discussion.name_of_topic}</h1>
                    {Object.keys(discussion).length > 0 ?
                        discussion.comments.map((c, i) => <div key={i}>
                            <div className="comment">
                                <h4 onClick={showForm}>{c.post}</h4>
                            </div>
                            {showEditForm ? <EditForm comment={c} /> : null}
                            <h5 className="comment_user">Posted by: {c.user.username.toUpperCase()}</h5>
                            <button onClick={() => {
                                fetch(`/comments/${c.id}`, { method: 'DELETE' })

                                setDiscussion(d => {
                                    return { ...d, comments: d.comments.filter(comm => comm.id !== c.id) }
                                })
                            }} className="delete">DELETE</button>
                        </div>)
                        : 'no'}
                </div>
            </div>
            <CommentForm discussion={discussion} addComment={addCommentToDiscussion} />
        </div>

    )
}



export default Discussion