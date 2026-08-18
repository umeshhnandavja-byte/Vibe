function UserGreeting(props){
    if(props.isLoggedin){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please log in to Continue</h2>
    }
}
export default UserGreeting