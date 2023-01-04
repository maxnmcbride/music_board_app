function UserPage({user}){

    return(
        <h1>Is the user logged in?  {user ? "Yes" : "NO"}</h1>
    )
}

export default UserPage