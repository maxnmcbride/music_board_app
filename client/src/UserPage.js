import { Link } from 'react-router-dom';

function UserPage({ user }) {

    return (
        <div>
            <div>
                <nav>
                    <Link to="/"><button>Log Out</button></Link>
                    <Link to="/discussions"><button>Discussions</button></Link>
                </nav>
                <h1>Current user: {user ? user.username : "not logged in. How'd you get in here?"}</h1>
            </div>
        </div>
    )
}

export default UserPage