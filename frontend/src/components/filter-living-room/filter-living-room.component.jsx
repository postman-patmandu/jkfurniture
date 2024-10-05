import { useState } from 'react';
import Product from '../../components/product/product.component';
import Message from '../../components/message/message.component';
import Loader from '../../components/loader/loader.component';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import FormRange from "react-bootstrap/FormRange";
import { Link } from 'react-router-dom';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useGetPriceRelatedProductsQuery } from '../../slices/products-api-slice.component';

const FilterLivingRoom = () => {
  const [value, setValue] = useState(50);

  const navigate = useNavigate();
  const { price } = useParams();

  const { data: productsFiltered, isLoadingData, error } = useGetPriceRelatedProductsQuery(price);
  console.log("value: ", productsFiltered);

  const submitPriceHandler = (e) => {
    navigate(`/living/price/${price}`);
  }

  return (
    // <div className="filter-box">
      <Row>
        {/* {isLoadingData ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              productsFiltered.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={6}>
                  <Product product={product} />
                </Col>
              ))
            )} */}
        <Col className="me-1" sm={11}>
          <h5>Price</h5>
          <ListGroup>
            <ListGroup.Item>
              <div class="slidecontainer">
                <FormRange
                  value={value}
                  min="250"
                  max="3000"
                  onChange={(event) => {
                    setValue(`${event.target.value}`);
                  }}
                ></FormRange>
                <Button
                  variant="outline-dark"
                  size='sm'
                  onClick={submitPriceHandler}
                >
                  Ok
                </Button>
                <Link className="nav-link mt-3" to={`/living/price/Coffee ${price}`}>
                  Check
                </Link>
                {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> */}
              </div>
            </ListGroup.Item>
          </ListGroup>
          <Link className="nav-link mt-3" to={`/living/Coffee`}>
            Coffee Tables
          </Link>
          <Link className="nav-link mt-3" to={`/living/Console`}>
            Hall Tables
          </Link>
          <Link className="nav-link mt-3" to={`/living/Lamp`}>
            Lamp Tables
          </Link>
          <Link className="nav-link mt-3" to={`/living/TV Stand`}>
            Tv Stand
          </Link>
        </Col>
      </Row>
    // </div>
  );
}

export default FilterLivingRoom;