import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Message from "../../components/message/message.component";
import {
    Row,
    Col,
    Button,
    ListGroup,
  } from "react-bootstrap";
import { toast } from "react-toastify";
import {
    useGetOrderDetailsQuery,
    usePayOrderMutation,
    usePaidOrderMutation,
} from "../../slices/orders-api-slice.component";
import Meta from '../../components/meta/meta.component';
import { saveOrderId } from "../../slices/cart-slice.component";

// import { loadStripe } from "@stripe/stripe-js";

// const KEY = process.env.REACT_APP_STRIPE_PUB_KEY;

// const stripe = await loadStripe(KEY);

const NewPaymentSuccess = () => {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
    const navigate = useNavigate();

    // const { cart } = useSelector((state) => state.cart);

    const { search } = useLocation();
    const id = new URLSearchParams(search);
    const sessionId = id.get('session_id');

    // const { id: orderId } = useParams();
    
    const orderId = cart.orderId;

    const {
        data: order,
        refetch,
        isLoading,
        error,
    } = useGetOrderDetailsQuery(orderId);

    const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
    const [paidOrder, { isLoading: loadingPaid }] = usePaidOrderMutation();

    // const PaymentSuccess = async () => {
    //     await payOrder({ orderId, details: {} });
    //     refetch();
    //     toast.success("Payment successful");
    // }

    const [Listing, setListing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('/api/stripe/order-success?session_id=' + sessionId);
        const json = await response.json();
        
        setListing(json.session);
    };

    const PaymentSuccess = async () => {
        await paidOrder({ orderId, details: {} });
        refetch();
    };

    fetchData();
    PaymentSuccess();
    }, [sessionId, orderId, refetch, paidOrder]);

    
    const returnHomeHandler = async () => {
        // PaymentSuccess();
        await paidOrder({ orderId, details: {} });
        navigate('/');
    }

    return (
        <div>
            {/* {Listing.payment_status} */}
            <Row>
                <Meta />
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                                {Listing.payment_method_types}
                            </p>
                            {Listing.payment_status === 'paid' ? (
                                <Message variant="success">Paid</Message>
                            ) : (
                                <Message variant="danger">Not Paid</Message>
                            )}
                            <Button type="button" variant="light" onClick={returnHomeHandler}>Home</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
  );
}

export default NewPaymentSuccess;