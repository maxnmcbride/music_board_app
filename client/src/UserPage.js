import { Link } from 'react-router-dom';

function UserPage({ user }) {

    return (
        <div>
            <nav>
            <Link to="/"><button>Home</button></Link>
                <Link to="/discussions"><button>Discussions</button></Link>
            </nav>
            <h1>Is the user logged in?  {user ? "Yes" : "NO"}</h1>
        </div>
    )
}

export default UserPage