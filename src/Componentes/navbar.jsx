import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCart } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="http://localhost:3000">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/QuienesSomos">Quienes Somos</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
            <NavDropdown title="Nuestros Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Verduleria">
                Verduleria
              </NavDropdown.Item>
              <NavDropdown.Item href="/Semilleria">
                Semilleria
              </NavDropdown.Item>
              <NavDropdown.Item href="/Panaderia">
                Panaderia
              </NavDropdown.Item>              
            </NavDropdown>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <BsPersonCircle/>
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                  <Dropdown.Item href="/Login">Iniciar Sesion</Dropdown.Item>
                  <Dropdown.Item href="/Register">Registrarse</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link href="/Minisuper">
                    <BsCart/>
                    </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;