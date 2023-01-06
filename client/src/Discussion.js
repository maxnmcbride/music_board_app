import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import CommentForm from "./CommentForm"


function Discussion() {
    const param = useParams()
    const { id } = param
    const [discussion, setDiscussion] = useState({})
    console.log("discussion:", discussion)

    useEffect(() => {
        fetch(`/discussions/${id}`)
            .then(r => r.json())
            .then(setDiscussion)
    }, [])


    return (
        <div className="discussion_pages">
        <div className="comment_section">
            <h1 className="discussion_title">{discussion.name_of_topic}</h1>
           { Object.keys(discussion).length > 0 ?
           discussion.comments.map( (c, i) => <div key={i}>
            <h4 className="comment">{c.post}</h4>
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
       
    )
}



export default Discussion