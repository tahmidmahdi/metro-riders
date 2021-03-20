import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { emailContext } from '../../App';
import "./Header.css"

const Header = () => {
    const [email, setEmail] = useContext(emailContext);
    console.log('from email', email);
    
    return (
        <div className='headers'>

            <h1 style={{fontSize:"55px"}} className='top-left'><strong>Metro Riders</strong></h1>
            <nav className='top-right'>
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='/destination'>Destination</Link>
                <Link className='link' to='/blog'>Blog</Link>
                <Link className='link' to='/contract'>Contract</Link>
                {(!email) && <Link className='link' to='/login'>Login</Link>}
                {
                    (email) && <p className='linkp'>{email}</p>
                }
            </nav>

        </div>
    );
};

export default Header;