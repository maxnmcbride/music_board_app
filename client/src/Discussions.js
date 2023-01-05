import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Discussions({setSelectedDiscussion}) {
    const [discussions, setDiscussions] = useState([])


    useEffect(() => {
        fetch("/discussions")
            .then(r => r.json())
            .then(setDiscussions)
    }, [])

    const mappedDiscussions =
        discussions.map((discussionObj) => {
            return (
                <>
                    <Link to="/eachdiscussion"><h2 onClick={()=>setSelectedDiscussion(discussionObj)}>{discussionObj.name_of_topic}</h2></Link>
                </>
            )

        })

    return (
        <div>
            <nav>
                <Link to="/userpage"><button>My Profile</button></Link>
            </nav>
            <h1>All Forums</h1>
            {mappedDiscussions}
        </div>
    )
}
export default Discussions