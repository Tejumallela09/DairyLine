import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminLinksComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <LinkContainer to="/admin/farmers">
          <Nav.Link>Farmers</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/user">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/chats">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>
        <Nav.Link>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminLinksComponent;

