import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core';
import {auth, provider} from './Firebase'
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer'

const Login = () => {
const [state, dispatch] =useStateValue()
    const signIn = (e) =>{
        auth
        .signInWithPopup(provider)
        .then(result =>{
            console.log('auth result', result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
                
            })
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    return (
        <div className='login'>
            <div className='login_container'>
                <img src='https://images.unsplash.com/photo-1599375515622-a7a4a6b027c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='random img'/>
                <h1>Sign in to My slack app</h1>
                <p>New and not changed</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
