// import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
// import StripeCheckout from "react-stripe-checkout";
import Message from "../../components/message/message.component";
import Loader from "../../components/loader/loader.component";
import {
  useGetOrderDetailsQuery,
  // usePayOrderMutation,
  useDeliverOrderMutation,
} from "../../slices/orders-api-slice.component";
import { saveOrderId } from "../../slices/cart-slice.component";
import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// dotenv.config();

const KEY = process.env.REACT_APP_STRIPE_PUB_KEY;

// const onToken = (token) => {
//   console.log(token);
// }

const OrderScreen = () => {
  const dispatch = useDispatch();
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  // const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const [deliverOrder, { isLoading: loadingDeliver }] = useDeliverOrderMutation();

  // const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  // const {
  //   data: paypal,
  //   isLoading: loadingPayPal,
  //   error: errorPayPal,
  // } = useGetPaypalClientIdQuery();

  const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!errorPayPal && !loadingPayPal && paypal.clientId) {
  //     const loadingPayPalScript = async () => {
  //       paypalDispatch({
  //         type: "resetOptions",
  //         value: {
  //           "client-id": paypal.clientId,
  //           currency: "NZD",
  //         },
  //       });
  //       paypalDispatch({ type: "setLoadingStatus", value: "pending" });
  //     };
  //     if (order && !order.isPaid) {
  //       if (!window.paypal) {
  //         loadingPayPalScript();
  //       }
  //     }
  //   }
  // }, [order, paypal, paypalDispatch, loadingPayPal, errorPayPal]);

  // const [clientSecret, setClientSecret] = useState("");


  // function onApprove(data, actions) {
  //   return actions.order.capture().then(async function (details) {
  //     try {
  //       await payOrder({ orderId, details });
  //       refetch();
  //       toast.success("Payment successful");
  //     } catch (err) {
  //       toast.error(err?.data?.message || err.message);
  //     }
  //   });
  // }

  // async function onApproveTest(actions) {
  //   await payOrder({ orderId, details: { payer: {} } });
  //   refetch();
  //   toast.success("Payment successful");
  // }

  // function onError(err) {
  //   toast.error(err.message);
  // }

  // function createOrder(data, actions) {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: order.totalPrice,
  //         },
  //       },
  //     ],
  //   }).then((orderId) => {
  //       return orderId;
  //   });
  // }

  const makePayment = async (actions) => {
    const stripe = await loadStripe(KEY);

    const body = {
      products: order.orderItems,
      order: order
    }

    console.log('Order Details: ', order);

    const headers = {
      "Content-Type": "application/json"
    }

    const response = await fetch('/api/stripe/create-checkout-session', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();
    
    if (response.status === 200) {
      // await payOrder({ orderId, details: { payer: {} } });
      // refetch();
      // toast.success("Payment successful");

    }

    dispatch(saveOrderId(orderId));

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

  };

  const deliverOrderHandler = async () => {
    try {
      await deliverOrder(orderId);
      refetch();
      toast.success('Order delivered');
    } catch (err) {
      toast.error(err?.data?.message || err.message);
    }
  }


  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                {order.user.email}
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                {order.shippingAddress.postCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md={1}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={4}>
                      {item.qty} x {item.price} = ${item.qty * item.price}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
                {/* <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row> */}
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {/* {loadingPay && <Loader />} */}

                  {/* {isPending ? (
                    <Loader />
                  ) : ( */}
                    <div>
                      {/*<Button
                        onClick={onApproveTest}
                        style={{ marginBottom: "10px" }}
                      >
                        Test Pay Order
                      </Button>*/}
                      {/* <div>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div> */}
                      
                      
                      <Button onClick={makePayment}>
                        Complete Order
                      </Button>
                      
                    </div>
                  {/* )} */}
                </ListGroup.Item>
              )}
              { loadingDeliver && <Loader /> }

              { userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <ListGroup.Item>
                  <Button type='button' className='btn btn-block' onClick={deliverOrderHandler}>
                    Mark As Delivered
                  </Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
