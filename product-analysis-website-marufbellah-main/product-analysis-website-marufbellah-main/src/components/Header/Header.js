import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
     return (
     
  
  <Navbar expand="lg">
  <Container >
    <Navbar.Brand ><h3 className='ps-4' style={{color: "#3401FE"}}>Programer</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-5 my-lg-0 pe-4  text-center  "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link >
          <CustomLink to='/'>
            <p><small>HOME</small></p>
         
            </CustomLink>
        </Nav.Link>
        <Nav.Link >
        <CustomLink to='/reviews'>
        <p><small>REVIEWS</small></p>
         </CustomLink>
        </Nav.Link>
        <Nav.Link >
        <CustomLink to='/dashBoard'>
        <p><small>DASHBOARD</small></p>
        </CustomLink>
        </Nav.Link>
        <Nav.Link >
        <CustomLink to='/blogs'>
        <p><small>BLOGS</small></p>
         </CustomLink>
        </Nav.Link>
        <Nav.Link >
        <CustomLink to='/about'>
        <p><small>ABOUT</small></p>
          </CustomLink>
        </Nav.Link>
      </Nav>
   
    </Navbar.Collapse>
  </Container>
</Navbar>
      
     );
};

export default Header;