import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BasicExample.css'; // Import your custom CSS here

function BasicExample() {
  const count = useSelector(state => state.cart.items);

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container className="pb-2">
        <Navbar.Brand><Link to="/product" className="navbar-brand">Shopping Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to='/product' className="nav-link">Home</Link> */}
            <Link to="/cart" className="nav-link d-flex align-items-center">
              Cart
              {
                count.length > 0 && (
                 
                   <span className="cart-count-badge ms-2">{count.length}</span>
                  
                 
                )
              }

          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar >
  );
}

export default BasicExample;
