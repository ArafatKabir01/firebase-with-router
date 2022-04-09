import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type='text' placeholder='Name'></input>
                <br />
                <input type='email' placeholder='E-mail'></input>
                <br />
                <input type='password' placeholder='Password'></input>
                <br />
                <input type='submit' value='Register'></input>
            </form>
        </div>
    );
};

export default SignUp;