import Login from './Login';
import SignUp from './SignUp';

function Home() {
    return (
        <>
            <div className="split left">
                <div className="centered">
                    <h1>Crescendo</h1>
                    <p>Connect with fellow musicians</p>
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                    <Login/>
                    <SignUp/>
                </div>
            </div>
        </>
    )
}

export default Home