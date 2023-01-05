import { useEffect, useState } from "react";

function Comment(){
    // pass user prop
    const [comments, setComments] = useState([])

    useEffect(()=>{

        // fetch to backend server build out CRUD, Need to create 
        // custom routes in rails
        fetch("/postcomment")
        .then

    }, [])

    return(
    <div>
        <h1>Comments</h1>
    </div>
    )
}
export default Comment