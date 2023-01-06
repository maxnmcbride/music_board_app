import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"


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

    const handleDelete = (commentObj) => {
        console.log(commentObj)
        //we want to send delete request
        //remove from state 
        //send delete request
        // fetch(`/comments/${commentObj.id}`, { method: 'DELETE' })
        // change state to original values
    }
console.log(Object.keys(discussion) > 0 && discussion.comments.length)
    const commentsArray = Object.keys(discussion) > 0 && discussion.comments.map((commentObj) => {
        return (
            <div key={commentObj.id}>
                <h4 key={commentObj.id}>{commentObj.user.username}: {commentObj.post}</h4>
                <button onClick={() => handleDelete(commentObj)}>x</button>
            </div>
        )
    })

    return (
        <div>
           { Object.keys(discussion).length > 0 ?
           discussion.comments.map( (c, i) => <div key={i}>
            <h1>{c.post}</h1>
            <button onClick={ () => {
                fetch( `/comments/${c.id}`, { method: 'DELETE' } )

                setDiscussion( d => {
                    return { ...d, comments: d.comments.filter( comm => comm.id !== c.id ) }
                } )
            } }>DELETE</button>
           </div>)
           : 'no' }
        </div>
    )
}

export default Discussion