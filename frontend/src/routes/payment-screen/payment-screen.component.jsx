import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import FormContainer from '../../components/form/form-container.component';
import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component";
import { savePaymentMethod } from "../../slices/cart-slice.component";
import Meta from "../../components/meta/meta.component";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit card");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => { 
    if (!shippingAddress.address) {
        navigate("/shipping");
    }
  },[shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  }

  return (
    <FormContainer>
      <Meta />
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={ submitHandler }>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="Credit Card"
              name="paymentMethod"
              value="credit card, afterpay "
              checkedonChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
