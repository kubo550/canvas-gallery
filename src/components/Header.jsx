import React, { useContext } from "react";
import { AuthContext } from '../auth/Auth';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import app from '../firebase/app'
import { AnimatedStyledNavbar } from '../layout'

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <AnimatedStyledNavbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='/' className="nav-link" >React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Link className="nav-link"  to='/'>Home</Link>
          <Link className="nav-link" to='/create'>Create</Link>
        </Nav>

       {!currentUser ?  (
          <Nav>
            <Link className="nav-link" to='/login'>Log In</Link>
            <Link className="nav-link" to='/register'>Register</Link>
          </Nav>
        ) : (
          <Nav>
            <Link className="nav-link" to='/' onClick={app.logOut}>Log Out</Link>
            <Link className="nav-link" to={`/profile/${currentUser.displayName}`}>
              {currentUser.displayName}
            </Link>
          </Nav>
        )}
        
      </Navbar.Collapse>
    </AnimatedStyledNavbar>
  );
};

export default Header;
