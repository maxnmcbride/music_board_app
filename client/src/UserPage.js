import { Link, useNavigate } from 'react-router-dom';

function UserPage({ user }) {

    console.log(user)
    const navigate = useNavigate()
    const handleLogOut = () => {
        //send delete request
        // change state to original values
        // redirect to home page DONE
        navigate("/")
    }
    return (
        <div>
            <div>
                <nav>
                    <button onClick={handleLogOut}>Log Out</button>
                    <Link to="/discussions"><button>Discussions</button></Link>
                </nav>
                <h1>Current user: {user ? user.username : "not logged in. How'd you get in here?"}</h1>
            </div>
        </div>
    )
}

export default UserPage