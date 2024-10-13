import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../components/form/form-container.component";
import { saveShippingAddress } from "../../slices/cart-slice.component";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component";
import ScrollTop from "../../utils/scroll-top.utils";
import Meta from "../../components/meta/meta.component";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;


  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postCode, setPostCode] = useState(shippingAddress?.postCode || "");
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postCode, country }));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <Meta />
      <h1>Shipping</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postCode" className="my-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
      <ScrollTop />
    </FormContainer>
  );
};

export default ShippingScreen;
