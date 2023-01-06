import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import CommentForm from "./CommentForm"


function Discussion() {
    const param = useParams()
    const { id } = param
    const [discussion, setDiscussion] = useState({})
    // console.log("discussion:", discussion)

    useEffect(() => {
        fetch(`/discussions/${id}`)
            .then(r => r.json())
            .then(setDiscussion)
    }, [])


    return (
        <div>
            <Link className="links" to="/"><button>Home</button></Link>
            <Link className="links" to="/userpage"><button>My Profile</button></Link>
            <Link className="links" to="/board"><button>Discussions</button></Link>
        <div className="discussion_pages">
        <div className="comment_section">
            <h1 className="discussion_title">{discussion.name_of_topic}</h1>
           { Object.keys(discussion).length > 0 ?
           discussion.comments.map( (c, i) => <div key={i}>
            <h4 className="comment">{c.post}</h4>
            <h5 className="comment-user">Posted by: {c.user.username.toUpperCase()}</h5>
            <button onClick={ () => {
                fetch( `/comments/${c.id}`, { method: 'DELETE' } )

                setDiscussion( d => {
                    return { ...d, comments: d.comments.filter( comm => comm.id !== c.id ) }
                } )
            } } className="delete">DELETE</button>
           </div>)
           : 'no' }
           </div>
        </div>
        <CommentForm/>
        </div>
       
    )
}



export default Discussion