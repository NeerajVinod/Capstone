import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';

function nav() {
    return (
        <Navbar style={{ backgroundColor: 'black' }} expand="lg" >
            <Container fluid>
                <Navbar.Brand style={{ color: 'red', fontSize: '30px' }} href="#">MINUTE TEC</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                        <Nav.Link style={{ color: 'white', marginLeft:'600px'}} href="/">Login</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="/register">Signup</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="/home">Home </Nav.Link>

                        <NavDropdown title="Category" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="#action3">Fasttrack</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Timex</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Casio </NavDropdown.Item>

                        </NavDropdown>
                 
                      
                        





                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" style={{ color: 'white', borderColor: 'white' }}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default nav;