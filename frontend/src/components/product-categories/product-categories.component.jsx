import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Chair, TableRestaurant, Bed, Tv, Light } from '@mui/icons-material';

const ProductCategories = () => {
  return (
    <Row className="d-flex mt-5 justify-content-around">
        <Col className="product-category" sm={4} xs={6} md={4} lg={2} xl={2}>
            <Link className='product-title-link' to="/living/living">
                <div className="category-container d-flex flex-column justify-content-center align-items-center">
                    {/* <Chair sx={{ fontSize: 80 }} /> */}
                    <img src="/images/product-category-paris.jpg" />
                    <p className="mt-4 text-center">Living Room</p>
                </div>
            </Link>
        </Col>
        <Col className="product-category" sm={4} xs={6} md={4} lg={2} xl={2}>
            <Link className='product-title-link' to="/bedroom/bedroom">
                <div className="category-container d-flex flex-column justify-content-center align-items-center">
                    {/* <TableRestaurant sx={{ fontSize: 80 }} /> */}
                    <img src="/images/product-category-industrial.jpg" />
                    <p className="mt-4 text-center">Bedroom</p>
                </div>
            </Link>
        </Col>
        <Col className="product-category" sm={4} xs={6} md={4} lg={2} xl={2}>
            <Link className='product-title-link' to="/dining/dining">
                <div className="category-container d-flex flex-column justify-content-center align-items-center">
                    {/* <Bed sx={{ fontSize: 80 }} />*/}
                    <img src="/images/product-category-dining.jpg" />
                    <p className="mt-4 text-center">Dining Room</p>
                </div>
            </Link>
        </Col>
        <Col className="product-category" sm={4} xs={6} md={4} lg={2} xl={2}>
            <Link className='product-title-link' to="/search/tables">
                <div className="category-container d-flex flex-column justify-content-center align-items-center">
                    {/* <Bed sx={{ fontSize: 80 }} />*/}
                    <img src="/images/product-category-tables.jpg" />
                    <p className="mt-4 text-center">Tables</p>
                </div>
            </Link>
        </Col>
        <Col className="product-category" sm={4} xs={6} md={4} lg={2} xl={2}>
            <Link className='product-title-link' to="/dining/display">
                <div className="category-container d-flex flex-column justify-content-center align-items-center">
                    {/* <TableRestaurant sx={{ fontSize: 80 }} /> */}
                    <img src="/images/product-category-display-units.jpg" />
                    <p className="mt-4 text-center">Display Units</p>
                </div>
            </Link>
        </Col>
    </Row>
  )
}

export default ProductCategories;