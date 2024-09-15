import { Row, Col } from "react-bootstrap";
import { Chair, TableRestaurant, Bed, Tv, Light } from '@mui/icons-material';

const ProductCategories = () => {
  return (
    <Row className="d-flex mt-5 pb-5 justify-content-around">
        <Col className="product-category" sm={6} xs={6} md={6} lg={2} xl={2}>
        <div className="category-container d-flex flex-column justify-content-center align-items-center">
            {/* <Chair sx={{ fontSize: 80 }} /> */}
            <img src="/images/product-category-paris.jpg" />
            <p className="mt-4 text-center">Living Room</p>
        </div>
        </Col>
        <Col className="product-category" sm={6} xs={6} md={6} lg={2} xl={2}>
        <div className="category-container d-flex flex-column justify-content-center align-items-center">
            {/* <TableRestaurant sx={{ fontSize: 80 }} /> */}
            <img src="/images/product-category-industrial.jpg" />
            <p className="mt-4 text-center">Bedroom</p>
        </div>
        </Col>
        <Col className="product-category" sm={6} xs={6} md={6} lg={2} xl={2}>
        <div className="category-container d-flex flex-column justify-content-center  align-items-center">
            {/* <Bed sx={{ fontSize: 80 }} />*/}
            <img src="/images/product-category-dining.jpg" />
            <p className="mt-4 text-center">Dining Room</p>
        </div>
        </Col>
        <Col className="product-category" sm={6} xs={6} md={6} lg={2} xl={2}>
        <div className="category-container d-flex flex-column justify-content-center  align-items-center">
            {/* <Bed sx={{ fontSize: 80 }} />*/}
            <img src="/images/product-category-tables.jpg" />
            <p className="mt-4 text-center">Tables</p>
        </div>
        </Col>
        <Col className="product-category" sm={6} xs={6} md={6} lg={2} xl={2}>
        <div className="category-container d-flex flex-column justify-content-center align-items-center">
            {/* <TableRestaurant sx={{ fontSize: 80 }} /> */}
            <img src="/images/product-category-display-units.jpg" />
            <p className="mt-4 text-center">Display Units</p>
        </div>
        </Col>
    </Row>
  )
}

export default ProductCategories;