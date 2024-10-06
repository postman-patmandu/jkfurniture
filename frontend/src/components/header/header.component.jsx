// import { useNavigate } from 'react-router-dom';
import { Badge, Navbar, Nav, Container, Col } from "react-bootstrap";
import { FaBed, FaChair, FaHouseUser, FaShoppingCart, FaTable, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/users-api-slice.component";
import { logout } from "../../slices/auth-slice.component";
import SearchBox from "../search-box/search-box.component";
import logo from "../../assets/logo.png";
import { resetCart } from "../../slices/cart-slice.component";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ logoutApiCall ] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      Navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  const menuLink = (event) => {
    event.preventDefault();
    
    const item = event.target.dataset.link;
    navigate(`/search/${item}`);
  }

  return (
    <header>
      <Container className="brand mt-4">
        <Col lg={6}>
          <LinkContainer to="/">
            <img src={logo} alt="furniture shop" />
          </LinkContainer>
        </Col>
      </Container>
      <Navbar variant="light" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/cart">
            <Nav.Link id="cart-items">
              <FaShoppingCart className="me-2"/><span>Shopping Cart Items</span>
              {cartItems.length > 0 && (
                <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </Badge>
              )}
            </Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="jk furniture" />
              Furniture Shop
            </Navbar.Brand>
          </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto flex-wrap">
              <Link className='inline-block me-2 nav-link active' to={`/dining/dining`}>
                Dining Room
              </Link>
              <Link className='inline-block me-2 nav-link active' to={`/living/living`}>
                Living Room
              </Link>
              <Link className='inline-block me-2 nav-link active' to={`/bedroom/bedroom`}>
                Bedroom
              </Link>
              <Link className='inline-block me-2 nav-link active' to={`/bedroom/bedroom`}>
                Bedroom
              </Link>
              <Link className="inline-block me-2 nav-link active" to="/styling-tips">
                Style
              </Link>
              {/* <a href="/" onClick={menuLink} data-link="dining" className="inline-block me-2 nav-link active">Dining Room</a>
            <a href="/" onClick={menuLink} data-link="table" className="inline-block me-2 nav-link active">Living Room</a>
            <a href="/" onClick={menuLink} data-link="bed" className="inline-block me-2 nav-link active">Bedroom</a>
            <a href="/" onClick={menuLink} data-link="display" className="inline-block me-2 nav-link active">Display Units</a> */}
            
            {/* <a href="/" onClick={menuLink} data-link="chair" className="inline-block me-2 nav-link active">Chairs</a> */}
              {/* <LinkContainer to="/profile">
                <Nav.Link className="inline-block me-2">Living Room</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link className="inline-block me-2">Bedroom</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link className="inline-block me-2">Display-units</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link className="inline-block me-5">Chairs</Nav.Link>
              </LinkContainer> */}
              <SearchBox />
              
              {/* { userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                <Nav.Link href="/login">
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
