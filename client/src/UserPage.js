import { Link, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react-router-dom';

function UserPage({ user, setUser }) {

    const navigate = useNavigate();
    const handleLogOut = () => {
        //send delete request
        fetch("/logout", { method: 'DELETE' })
        // change state to original values
        setUser(false)
        navigate("/")
        // redirect to home page DONE
    }
    return (
        <div>
            <div>
                <nav className="links">
                    <Link to="/board"><button>Discussions</button></Link>
                    <button onClick={handleLogOut}>Log Out</button>
                </nav>
                <div>
                <h1 className="user_profile">Welcome, {user ? user.username.toUpperCase() : "We'd Love To Let You Be Here, But You Need To Sign In"}</h1>
                <h2 className="user_specialty">{user.specialty.toUpperCase() }</h2>
                </div>
            </div>
        </div>
    )
}

export default UserPage