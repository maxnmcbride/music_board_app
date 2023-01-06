import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserPage from './UserPage';

function Discussions({setSelectedDiscussion}) {
    const [discussions, setDiscussions] = useState([])

// do we need bring this fetch into app?
    useEffect(() => {
        fetch("/discussions")
            .then(r => r.json())
            .then(setDiscussions)
    }, [])

    const mappedDiscussions =
        discussions.map((discussionObj) => {
            return (
                <>
                    <Link to={`/board/${discussionObj.id}`}><h2 onClick={()=>setSelectedDiscussion(discussionObj)}>{discussionObj.name_of_topic}</h2></Link>
                </>
            )

        })

    return (
        <div>
            <nav className="links">

                <Link to="/"><button>Home</button></Link>

                <Link to="/userpage"><button>My Profile</button></Link>
                
            </nav>
            <h1 className="discussions_page">All Discussions</h1>
            <h5 className="discussions_page">{mappedDiscussions}</h5>
        </div>
    )
}
export default Discussions