import React from 'react'

const Login = (props) => {
    const isLogged = true;
    if (isLogged){

        return (
            <div>
            <h1>Welcome user</h1>
                <h2>Hello {props.name ? <b>{props.name}</b> :<span>user</span>} how are you today?</h2>
                <h3>{props.notification && <>you have a new notification</>}</h3>
            </div>
        )
    }
    else{
        return(
            <div>Login first</div>
        )
    }
}

export default Login