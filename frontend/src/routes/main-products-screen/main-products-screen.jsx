import { useEffect, useState } from "react";
import { Form, ListGroup, Row, Col, Button } from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import { Link } from "react-router-dom";
import ProductFilter from "../../components/product-filter/product-filter.component";
import Product from "../../components/product/product.component";
import Message from "../../components/message/message.component";
import Loader from "../../components/loader/loader.component";
import Headings from "../../components/headings/headings.component";
import { Helmet } from "react-helmet-async";
// import Meta from "../../components/meta/meta.component";
// import FilterLivingRoom from '../../components/filter-living-room/filter-living-room.component';

import { useGetTopProductsQuery } from "../../slices/products-api-slice.component";
import { useParams } from "react-router-dom";

const MainProductsScreen = () => {
  const { keyword } = useParams();
  const { data: products, isLoading, error } = useGetTopProductsQuery(keyword);
  let { productArray } = useState([]);
  const [widthValue, setWidthValue] = useState(2190);
  const [lengthValue, setLengthValue] = useState(2183);
  const [heightValue, setHeightValue] = useState(2190);
  const [priceValue, setPriceValue] = useState(2255);

  const title = "Living Room Rustic Living Room, Console Tables, Hall Tables, Coffee Tables, Lamp Tables Bedroom Furniture, Dining Room";
  const description = "Rustic furniture blends natural wood tones and rugged textures, creating warm, cozy spaces for dining, living, and bedroom areas with timeless, earthy charm."
  const keywords = "Rustic Furniture, Furniture Shop, Furniture Shop NZ, furniture store, furniture stores, furniture stores, the furniture shop, Living Room";

  const headline = "All Furniture \nProduct Ranges";
  const headlineTag = "All Products";

  let priceRange = document.querySelector(
    '.slide-container input[type="range"]'
  );
  console.log("input: ", priceRange);

  const submitPriceHandler = (e) => {
    setPriceValue(e.target.value);
  };


  console.log("prod", products);

  if (!isLoading) {
    productArray = products.filter(function (el) {
      return (
        el.price <= priceValue &&
        el.width <= widthValue &&
        el.length <= lengthValue &&
        el.height <= heightValue
      );
    });
  }

  console.log("input: ", priceRange);

  return (
    <>
      <section className="room-container">
      <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href="https://www.furnitureshop.nz/products" />
            {/* <Meta tite={metaDetails.title} description={metaDetails.description} keywords={metaDetails.keywords} /> */}
          </Helmet>
        {/* <Meta title={title} description={description} keywords={keywords} /> */}
        <Headings headline={headline} headlineTag={headlineTag} />
        <div className="d-flex flex-wrap">
          <Col className="filter-box" sm={12} lg={3}>
            <Col className="pe-2 my-3" sm={12}>
              <div>
                <ListGroup className="categories-box">
                  <ListGroup.Item>
                    <div className="title-box">
                      <p>
                        <small>Categories</small>
                      </p>
                    </div>
                    <Link className="nav-link mt-2" to={`/living/Coffee`}>
                      <small>Coffee Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/Console`}>
                      <small>Hall Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/Lamp`}>
                      <small>Lamp Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/TV Stand`}>
                      <small>Tv Stand</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/Coffee`}>
                      <small>Coffee Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/Console`}>
                      <small>Hall Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/Lamp`}>
                      <small>Lamp Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/TV Stand`}>
                      <small>Tv Stand</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/dining/Chair`}>
                        <small>Dining Chairs</small>
                      </Link>
                      <Link
                        className="nav-link mt-2"
                        to={`/dining/Diningtable`}
                      >
                        <small>Dining Tables</small>
                      </Link>
                      <Link className="nav-link mt-2" to={`/dining/Buffet`}>
                        <small>Buffet Tables</small>
                      </Link>
                      <Link className="nav-link mt-2" to={`/dining/Display`}>
                        <small>Display Units</small>
                      </Link>
                      <Link className="nav-link mt-2" to={`/dining/Bar`}>
                        <small>Bar</small>
                      </Link>
                      <Link className="nav-link mt-2" to={`/bedroom/Headboard`}>
                      <small>Bed Frames</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/bedroom/Bedside`}>
                      <small>Bedside Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/bedroom/Lamp`}>
                      <small>Lamp Tables</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/bedroom/Dresser`}>
                      <small>Dressers</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/bedroom/Tall`}>
                      <small>Tall Boy</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/bedroom/Lingerie`}>
                      <small>Lingerie Units</small>
                    </Link> 
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <ListGroup className="categories-box">
                  <ListGroup.Item>
                    <div className="title-box">
                      <p>
                        <small>Material</small>
                      </p>
                    </div>
                    <Link className="nav-link mt-2" to={`/living/pine`}>
                      <small>Pine</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/timber`}>
                      <small>Solid Timber</small>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              <ListGroup className="categories-box">
                  <ListGroup.Item>
                    <div className="title-box">
                      <p>
                        <small>Brand</small>
                      </p>
                    </div>
                    <Link className="nav-link mt-2" to={`/living/american`}>
                      <small>American Rustic</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/casablanca`}>
                      <small>Casablanca</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/industrial`}>
                      <small>Industrial</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/market`}>
                      <small>Market Road</small>
                    </Link>
                    <Link className="nav-link mt-2" to={`/living/paris`}>
                      <small>Paris</small>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
            </Col>
          </Col>
          {/* <FilterLivingRoom /> */}

          <Col className="d-flex flex-wrap" sm={12} lg={9}>
            <Row>
              {isLoading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                productArray.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={6} xl={6}>
                    <ProductFilter product={product} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </div>
      </section>
    </>
  );
};

export default MainProductsScreen;
