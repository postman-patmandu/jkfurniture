import { useEffect, useState } from "react";
import { Form, ListGroup, Row, Col, Button } from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import { Link } from "react-router-dom";
import ProductFilter from "../../components/product-filter/product-filter.component";
import Product from "../../components/product/product.component";
import Message from "../../components/message/message.component";
import Loader from "../../components/loader/loader.component";
// import Meta from "../../components/meta/meta.component";
import { Helmet } from "react-helmet-async";
// import FilterLivingRoom from '../../components/filter-living-room/filter-living-room.component';

import { useGetTopProductsQuery } from "../../slices/products-api-slice.component";
import { useParams } from "react-router-dom";

const DiningRoomScreen = () => {
  const { keyword } = useParams();
  const { data: products, isLoading, error } = useGetTopProductsQuery(keyword);
  let { productArray } = useState([]);
  const [widthValue, setWidthValue] = useState(2190);
  const [lengthValue, setLengthValue] = useState(2183);
  const [heightValue, setHeightValue] = useState(2190);
  const [priceValue, setPriceValue] = useState(2255);

  const title="Dining Room Rustic Furniture, Tables, Chairs";
  const description = "Rustic dining room furniture from furniture Shop features solid, handcrafted pieces made from natural materials like reclaimed wood and metal.";
  const keywords = "Rustic Furniture, Furniture Shop, Furniture Shop NZ, furniture store, furniture stores, furniture stores, the furniture shop, Dining Room";

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
    <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href="https://www.furnitureshop.nz/dining/dining" />
            {/* <Meta tite={metaDetails.title} description={metaDetails.description} keywords={metaDetails.keywords} /> */}
          </Helmet>
    {/* <Meta title={title} description={description} keywords={keywords} /> */}
    <h1 className="h3">Dining Room Furniture</h1>
      <section className="room-container">
        <div className="d-flex flex-wrap">
          <Col className="filter-box" sm={12} md={2} lg={3}>
            <Col className="pe-2 my-3" sm={12}>
              <div>
                <ListGroup className="categories-box">
                  <ListGroup.Item>
                    <div className="title-box">
                      
                        <p>
                          <small>Categories</small>
                        </p>
                    
                    </div>
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

                  </ListGroup.Item>
                </ListGroup>
              </div>
              <ListGroup>
                <ListGroup.Item>
                  <div className="slide-container w-100">
                    <div className="title-box">
                      <p>
                        <small>Price</small>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <sup>155</sup>
                      <sup>2255</sup>
                    </div>
                    <FormRange
                      value={priceValue}
                      min="155"
                      max="2255"
                      step="50"
                      onChange={(event) => {
                        setPriceValue(`${event.target.value}`);
                      }}
                    ></FormRange>
                  </div>
                </ListGroup.Item>
                <div className="range-value">${priceValue}</div>
                {/* <ListGroup.Item>
                      <div class="slide-container">
                        <FormRange
                          value={value}
                          min="250"
                          max="3000"
                          step="50"
                          onChange={(event) => {
                            setValue(`${event.target.value}`);
                          }}
                        ></FormRange>
                        <input type="text" value={value} />
                      </div>
                    </ListGroup.Item> */}
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <div className="slide-container w-100">
                    <div className="title-box">
                      <p>
                        <small>Width</small>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <sup>0</sup>
                      <sup>2190</sup>
                    </div>
                    <FormRange
                      value={widthValue}
                      min="0"
                      max="2190"
                      step="50"
                      onChange={(event) => {
                        setWidthValue(`${event.target.value}`);
                      }}
                    ></FormRange>
                  </div>
                </ListGroup.Item>
                <div className="range-value">{widthValue}mm</div>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <div className="slide-container w-100">
                    <div className="title-box">
                      <p>
                        <small>Length</small>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <sup>0</sup>
                      <sup>2183</sup>
                    </div>
                    <FormRange
                      value={lengthValue}
                      min="00"
                      max="2183"
                      step="50"
                      onChange={(event) => {
                        setLengthValue(`${event.target.value}`);
                      }}
                    ></FormRange>
                  </div>
                </ListGroup.Item>
                <div className="range-value">{lengthValue}mm</div>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <div className="slide-container w-100">
                    <div className="title-box">
                      <p>
                        <small>Height</small>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <sup>0</sup>
                      <sup>2190</sup>
                    </div>
                    <FormRange
                      value={heightValue}
                      min="00"
                      max="2190"
                      step="50"
                      onChange={(event) => {
                        setHeightValue(`${event.target.value}`);
                      }}
                    ></FormRange>
                  </div>
                </ListGroup.Item>
                <div className="range-value">{heightValue}mm</div>
              </ListGroup>
              <ListGroup className="categories-box">
                <ListGroup.Item>
                  <div className="title-box">
                    <p>
                      <small>Material</small>
                    </p>
                  </div>
                  <Link className="nav-link mt-2" to={`/dining/pine`}>
                    <small>Pine</small>
                  </Link>
                  <Link className="nav-link mt-2" to={`/dining/timber`}>
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
                  <Link className="nav-link mt-2" to={`/dining/american`}>
                    <small>American Rustic</small>
                  </Link>
                  <Link className="nav-link mt-2" to={`/dining/casablanca`}>
                    <small>Casablanca</small>
                  </Link>
                  <Link className="nav-link mt-2" to={`/dining/industrial`}>
                    <small>Industrial</small>
                  </Link>
                  <Link className="nav-link mt-2" to={`/dining/market`}>
                    <small>Market Road</small>
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

export default DiningRoomScreen;
