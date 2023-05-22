import { Navbar, Nav, Container, NavDropdown, Badge, Form, DropdownButton, Dropdown, Button, InputGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
const HeaderComponent = () => {
     return (
          <><Navbar collapseOnSelect expand="lg" bg-opacity="50%" className="bg-#757ce8 p-2 text-dark bg-opacity-75">
               <Container>
                    <LinkContainer to="/">
                         <Navbar.Brand href="/" ><img src="\images\logo.png" alt="Dairy Line Logo" width="150" height="75"/>
                         </Navbar.Brand>  
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         {/* <Nav className="me-auto">
                              <InputGroup>
                                   <DropdownButton variant="dark" id="dropdown-basic-button" title="All" >
                                        <Dropdown.Item >Electronics</Dropdown.Item>
                                        <Dropdown.Item >Books</Dropdown.Item>
                                        <Dropdown.Item >Cars</Dropdown.Item>
                                   </DropdownButton>
                                   <Form.Control type="text" placeholder="Search in shop.." />
                                   <Button variant="primary"><i className="bi bi-search"></i></Button>
                              </InputGroup>
                         </Nav> */}
                         <Nav className="ms-auto">
                              <LinkContainer to="/admin-orders">
                                   <Nav.Link>Admin
                                        <span className="position-absolute top-1 start-10 translate-middle p-2
                                        bg-danger border border-light rounded-circle"></span>
                                   </Nav.Link>
                              </LinkContainer>
                              
                              <LinkContainer to="/product-details">
                                   <Nav.Link>Products</Nav.Link>
                              </LinkContainer>
                              <LinkContainer to="/blog/page">
                                   <Nav.Link>Blog
                                   </Nav.Link>
                              </LinkContainer>
                              <NavDropdown title="Tejaswi" id="collasible-nav-dropdown">
                                   <NavDropdown.Item as={Link} eventKey="/user-orders" to="/user-orders">My Orders</NavDropdown.Item>
                                   <NavDropdown.Item as={Link} eventKey="/user-profile" to="/user-profile">My Profile</NavDropdown.Item>
                                   <NavDropdown.Item>Logout</NavDropdown.Item>
                              </NavDropdown>
                              <LinkContainer to="/login">
                                   <Nav.Link>Login</Nav.Link>
                              </LinkContainer>
                              <LinkContainer to="/register">
                                   <Nav.Link>Register</Nav.Link>
                              </LinkContainer>
                              <LinkContainer to="/cart">
                                   <Nav.Link><i className="bi bi-cart"></i><span className="ms-1">Cart </span> <Badge pill bg="danger">2</Badge></Nav.Link>
                              </LinkContainer>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
          </>

     );

};
export default HeaderComponent;
