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
                    <Link to="/"><button>Home</button></Link>
                   
                    <Link to="/board"><button>Discussions</button></Link>

                    <button onClick={handleLogOut}>Log Out</button>
                </nav>
                <h1>Current user: {user ? user.username : "Not logged in. How'd you get in here?"}</h1>
            </div>
        </div>
    )
}

export default UserPage