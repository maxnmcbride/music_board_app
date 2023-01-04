import { Link } from 'react-router-dom';

function Discussions(){
    return(
        <div>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/userpage"><button>My Profile</button></Link>
            </nav>
            <h1>Welcome to all discussions</h1>
        </div>
    )
}
export default Discussions