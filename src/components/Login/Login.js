import React from 'react';
import useFirebase from '../Hooks/useFirebase';


const Login = () => {
    const {signWithGoogle} = useFirebase();
    return (
        <div className='login-form'>
            <h2 className='text-midnight'>please Login</h2>
            <form>
                <input type='email' placeholder='E-mail'></input>
                <br />
                <input type='password' placeholder='Password'></input>
                <br />
                <input type='submit' value='Login'></input>
                <br />
            </form>
                <button onClick={signWithGoogle} >Google Login</button>
            
            
            
        </div>
    );
};

export default Login;