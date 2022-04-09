import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user , hendleLogOut} = useFirebase()
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='/signUp'>SignUp</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid ?
                <button onClick={hendleLogOut}>Log Out</button> :
                <Link to='/login'>Login</Link>
            }
            
        </div>
    );
};

export default Header;