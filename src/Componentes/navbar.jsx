import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css';


const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="QuienesSomos.jsx">Quienes Somos</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            <NavDropdown title="Nuestros Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Mercaderia General</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Verduleria
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Carniceria
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Semilleria
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Panaderia
              </NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="#">
              <BsCart/>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <BsPersonCircle/>
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Iniciar Sesion</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Registrarse</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
            />
            <Button variant="outline-success"><BsSearch/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;