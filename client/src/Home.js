import Login from './Login';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

function Home({setUser}) {
    const navigate = useNavigate()
    return (
        <>
            <div className="split left">
        <button className="profile_button" onClick={()=>{
            navigate("/userpage")
        }}>Go To My Profile</button>
                <div className="centered">
                    <h1 className="title">Crescendo</h1>
                    <p className="description">Connect with fellow musicians</p>
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                    <Login setUser={setUser}/>
                    <SignUp/>
                </div>
            </div>
        </>
    )
}

export default Home