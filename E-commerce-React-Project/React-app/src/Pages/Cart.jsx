import { useEffect, useState } from "react";
import { Container, Table, Button, Form, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const total = subtotal - discount;

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(subtotal * 0.1); 
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  return (
    <Container className="mt-4">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          <Col md={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {item.name}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <Form.Select
                        value={item.quantity || 1}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        style={{ width: "70px" }}
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </Form.Select>
                    </td>
                    <td>${item.price * (item.quantity || 1)}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Form className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <Button variant="danger" onClick={applyCoupon}>
                Apply Coupon
              </Button>
            </Form>

            <Button
              variant="secondary"
              className="mt-3"
              onClick={() => navigate("/productPage")}
            >
              Return to Shop
            </Button>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Cart Total</Card.Title>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Discount: ${discount.toFixed(2)}</p>
                <p>Shipping: Free</p>
                <h5>Total: ${total.toFixed(2)}</h5>
                <Button
                  variant="danger"
                  onClick={() => navigate("/checkout")}
                  className="w-75 mx-auto my-3 justify-content-center"
                >
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
