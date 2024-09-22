import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Accordion,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/rating/rating.component";
import Loader from "../../components/loader/loader.component";
import Product from "../../components/product/product.component";
import Paginate from "../../components/paginate/paginate.component";
import Message from "../../components/message/message.component";
import { toast } from "react-toastify";
import Meta from "../../components/meta/meta.component";
import {
  useGetTopProductsQuery,
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../../slices/products-api-slice.component";
import { addToCart } from "../../slices/cart-slice.component";
import ProductCategories from "../../components/product-categories/product-categories.component";

// import products from '../../products';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { pageNumber, keyword } = useParams();
  const { data: products, isLoadingData } = useGetTopProductsQuery();

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  // const product = products.find((p) => p._id === productId);
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating, 
        comment
      }).unwrap();
      refetch();
      toast.success('Review Submitted');
      setRating(0);
      setComment('');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title={product.name} description={product.description} />
          <Row>
            <Col md={7}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={5}>
              {/* <ListGroup variant="flush"> */}
              <ListGroup.Item>
                <h3 className="mt-3">{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col className="py-1">
                    Status:
                    <strong className="ps-2">
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="d-inline-block my-2">
                  <strong>Price: </strong>
                </span>{" "}
                ${product.price}
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row className="mt-3">
                    <Col sm={5} className="pb-3">
                    <Button
                      className="btn btn-success btn-sm w-100 d-block"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                      {/* <strong>Qty</strong> */}
                    </Col>
                    <Col className="pb-3" sm={4} >
                      <Form.Control
                        className="form-select form-select-sm"
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <p className="pb-2">{product.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Specifications</Accordion.Header>
                    <Accordion.Body>
                      <p>Width: {product.width}</p>
                      <p>Height: {product.height}</p>
                      <p>Length: {product.length}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroup.Item>
              {/* </ListGroup> */}
            </Col>
            {/* <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            className="form-select form-select-sm"
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[
                              ...Array(product.countInStock)
                                .keys()
                                .map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )),
                            ]}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col> */}
          </Row>
          <Row className="review">
            <Col md={7}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flusth">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>

                  {loadingProductReview && <Loader />}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating" className="my-2">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment" className="my-2">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          {/* <Row><ProductCategories /></Row> */}
          <Row>
            <h1 className="headline mt-5 mb-5">Top Products</h1>
            <h2 className="headline-tag">Selection</h2>
            {isLoadingData ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
             : (
            products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            )))}
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
