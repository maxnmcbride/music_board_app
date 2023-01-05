import { Link, useNavigate } from 'react-router-dom';
import {useEffect} from 'react-router-dom';

function UserPage({ user, setUser }) {

    console.log(user)
    const navigate = useNavigate();
    const handleLogOut = () => {
        //send delete request
        fetch("/logout",{method: 'DELETE'})
        // change state to original values
        setUser(false)
        navigate("/")
        // redirect to home page DONE
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