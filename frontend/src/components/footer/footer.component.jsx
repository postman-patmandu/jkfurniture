import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const menuLink = (event) => {
        event.preventDefault();
        
        const item = event.target.dataset.link;
        navigate(`/search/${item}`);
    }
    

  return (
    <footer>
        <Container>
            <Row className='pt-5 justify-content-between info-links'>
                <Col sm={12} lg={4}>
                    <h3>Furniture Shop</h3>
                    <p>Our specialty is supplying timber furniture made from Solid Pine, 
                        Modern Recycled Pine and hardwood Acacia. Offering ‘rustic styling’ 
                        and ‘modern contemporary styles’.</p>
                </Col>
                <Col className='links' sm={12} lg={2}>
                    <h3>Quick Links</h3>
                    <Link to="/" onClick={menuLink} data-link="living">
                        Living Room 
                    </Link>
                    <Link to="/" onClick={menuLink} data-link="bedroom">
                        Bedroom 
                    </Link>
                    <Link to="/" onClick={menuLink} data-link="dining">
                        Dining Room 
                    </Link>
                </Col>
                <Col className='policies' sm={12} lg={2}>
                    <h3>Policy</h3>
                    <Link to="/terms">
                        Terms & Conditions 
                    </Link>
                    <Link to="/privacy">
                        Privacy Policy 
                    </Link>
                    <Link to="/support">
                        Customer Support
                    </Link>
                    <Link to="/support#shipping">
                        Shipping
                    </Link>
                </Col>
                <Col className='contact-us' sm={12} lg={2}>
                    <h3>Contact</h3>
                    <Link to="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "mailto:furnitureshopnz@gmail.com";
                        }}
                    >
                        <strong>Email: </strong> furnitureshopnz@gmail.com
                    </Link>
                    
                    <p>For all order and product infomation</p>
                    <p><strong>Telephone: </strong> 021 804 922</p>
                    
                </Col>
            </Row>
            <Row>
                <Col className='text-center py-3'>
                    <p >Furniture Shop &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
};

export default Footer;