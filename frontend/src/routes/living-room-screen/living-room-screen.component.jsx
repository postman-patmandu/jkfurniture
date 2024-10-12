import { useEffect, useState } from "react";
import { Form, ListGroup, Row, Col, Button } from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import { Link } from "react-router-dom";
import ProductFilter from "../../components/product-filter/product-filter.component";
import Product from "../../components/product/product.component";
import Message from "../../components/message/message.component";
import Loader from "../../components/loader/loader.component";
import Meta from "../../components/meta/meta.component";
// import FilterLivingRoom from '../../components/filter-living-room/filter-living-room.component';

import { useGetTopProductsQuery } from "../../slices/products-api-slice.component";
import { useParams } from "react-router-dom";

const LivingRoomScreen = () => {
  const { keyword } = useParams();
  const { data: products, isLoading, error } = useGetTopProductsQuery(keyword);
  let { productArray } = useState([]);
  const [widthValue, setWidthValue] = useState(1500);
  const [lengthValue, setLengthValue] = useState(1450);
  const [heightValue, setHeightValue] = useState(1350);
  const [priceValue, setPriceValue] = useState(900);

  const title = "Living Room Rustic Furniture, TV Stands, Console Tables, Hall Tables, Coffee Tables, Lamp Tables";
  const description = "Rustic living room furniture features natural materials like reclaimed wood, metal, and stone, with distressed finishes that highlight texture and craftsmanship. Sofas, coffee tables, consoles, and cabinets in warm, earthy tones bring cozy charm to any space. Ideal for farmhouse, cabin, or rustic-modern interiors, rustic living room furniture blends rugged beauty with comfort, creating an inviting, timeless atmosphere perfect for relaxation and entertaining."
  const keywords = "Rustic Furniture, Furniture Shop, Furniture Shop NZ, furniture store, furniture stores, furniture stores, the furniture shop, Living Room";

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
        <Meta title={title} description={description} keywords={keywords} />
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

export default LivingRoomScreen;
