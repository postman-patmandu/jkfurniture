import { Col, Nav, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { FaUser } from "react-icons/fa";
import { useLogoutMutation } from "../../slices/users-api-slice.component";
import { logout } from "../../slices/auth-slice.component";
import { Navigate, useNavigate } from "react-router-dom";

const AdminBar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ logoutApiCall ] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      Navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='top-bar-container d-flex'>
        <div className="container d-flex admin-bar py-2">
            <Col className="">
                <a href="mailto:&#102;&#117;&#114;&#110;&#105;&#116;&#117;&#114;&#101;&#115;&#104;&#111;&#112;&#110;&#122;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                &#102;&#117;&#114;&#110;&#105;&#116;&#117;&#114;&#101;&#115;&#104;&#111;&#112;&#110;&#122;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                </a>
            </Col>
            <Col className="d-flex justify-content-end">
            { userInfo ? (
                <NavDropdown title={userInfo.name} id='username' className="mx-4">
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
              )}
            </Col>
        </div>
    </div>
  )
}

export default AdminBar;