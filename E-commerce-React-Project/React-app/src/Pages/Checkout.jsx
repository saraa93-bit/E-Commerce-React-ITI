import { useState, useEffect } from "react";
import { Container, Form, Button, Modal, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [couponCode, setCouponCode] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      alert("10% discount applied!");
    } else {
      alert("Invalid Coupon Code");
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!userInfo.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!userInfo.streetAddress.trim()) newErrors.streetAddress = "Street Address is required";
    if (!userInfo.city.trim()) newErrors.city = "City is required";
    if (!userInfo.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!userInfo.email.trim()) newErrors.email = "Email Address is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setShowConfirmModal(true);
    }
  };

  const confirmOrder = () => {
    const order = {
      user: userInfo,
      products: cartItems,
      totalPrice,
      paymentMethod,
      status: "Pending",
    };

    axios.post("http://localhost:3000/orders", order)
      .then(() => {
        localStorage.removeItem("cart");
        setShowConfirmModal(false);
        setShowSuccessModal(true);
      })
      .catch((err) => console.error("Error placing order:", err));
  };

  const handleSuccessOk = () => {
    setUserInfo({
      firstName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      city: "",
      phone: "",
      email: "",
    });
    setShowSuccessModal(false);
    setShowRedirectModal(true);
  };

  const handleRedirect = (path) => {
    setShowRedirectModal(false);
    navigate(path);
  };

  return (
    <Container className="mt-4">
      <h2>Billing Details</h2>
      <Row>
        <Col md={7}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={userInfo.companyName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Street Address*</Form.Label>
              <Form.Control
                type="text"
                name="streetAddress"
                value={userInfo.streetAddress}
                onChange={handleInputChange}
                isInvalid={!!errors.streetAddress}
              />
              <Form.Control.Feedback type="invalid">{errors.streetAddress}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apartment, floor, etc. (optional)</Form.Label>
              <Form.Control
                type="text"
                name="apartment"
                value={userInfo.apartment}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Town/City*</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={userInfo.city}
                onChange={handleInputChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="Save this information for faster check-out next time"
            />
          </Form>
        </Col>

        <Col md={5}>
          <Card>
            <Card.Body>
              <h5>Order Summary</h5>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}

              <hr />
              <div className="d-flex justify-content-between">
                <strong>Subtotal:</strong>
                <span>${totalPrice}</span>
              </div>
              <div className="d-flex justify-content-between">
                <strong>Shipping:</strong>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <span>${totalPrice}</span>
              </div>

              <hr />

              {/* <Form.Check
                type="radio"
                label="visa"
                name="paymentMethod"
                value="visa"
                onChange={(e) => setPaymentMethod(e.target.value)}
              /> */}
              <Form.Check
                type="radio"
                label="Cash on delivery"
                name="paymentMethod"
                value="cash"
                defaultChecked
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <div className="d-flex mt-3">
                <Form.Control
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button variant="danger" onClick={applyCoupon} className="ms-2">
                  Apply Coupon
                </Button>
              </div>

              <Button variant="danger" className="w-50  mx-auto my-4" onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to place this order?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmOrder}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={handleSuccessOk}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your order has been placed successfully. Wait for an email confirmation.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSuccessOk}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRedirectModal} onHide={() => setShowRedirectModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>What would you like to do next?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Choose where to go:</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleRedirect("/products")}>
            Continue Shopping
          </Button>
          <Button variant="secondary" onClick={() => handleRedirect("/")}>
            Back to Home
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Checkout;
