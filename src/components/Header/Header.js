import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { emailContext } from '../../App';
import "./Header.css"

const Header = () => {
    const [email] = useContext(emailContext);
    console.log('from email', email);

    return (
        <div className='headers'>

            <h1 style={{ fontSize: "55px" }} className='top-left'><strong>Metro Riders</strong></h1>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Metro Riders</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Link className='link' to='/home'>Home</Link>
                        <Link className='link' to='/destination'>Destination</Link>
                        <Link className='link' to='/blog'>Blog</Link>
                        <Link className='link' to='/contract'>Contract</Link>
                        {(!email) && <Link  className='link button' to='/login'>Login</Link>}
                        {
                            (email) && <p  className='link button-login'>{email}</p>
                        }

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar> 
            {/* <nav className='top-right'>
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='/destination'>Destination</Link>
                <Link className='link' to='/blog'>Blog</Link>
                <Link className='link' to='/contract'>Contract</Link>
                {(!email) && <Link className='link' to='/login'>Login</Link>}
                {
                    (email) && <p className='linkp'>{email}</p>
                }
            </nav> */}









            


        </div>
    );
};

export default Header;