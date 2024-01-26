import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom';


function Topbar(){
    let navigate = useNavigate();

    return(
        <>
              <Navbar expand="md" className="bg-info p-2">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate('/')} style={{textAlign:"center"}} id='admin'><b>Admin Dashboard</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"style={{fontWeight:"500",}}>
                        <Nav className="ms-auto bg-light" id='navbar'>
                            <Nav.Link onClick={() => navigate('/')}><b>Dashboard</b></Nav.Link>
                            
                            <Nav.Link onClick={() => navigate('/adduser')}><b>Add User</b></Nav.Link>  
                            <Nav.Link onClick={() => navigate('/edituser/:id')}><b>Edit User</b></Nav.Link>                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Topbar