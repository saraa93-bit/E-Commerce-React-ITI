import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { FaShoppingCart, FaCheckCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (location.hash) {
      const productId = location.hash.replace('#product-', '');
      const targetElement = document.getElementById(`product-${productId}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        targetElement.style.border = '2px solid red';
      }
    }
  }, [location, products]);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (existingCart.some(item => item.id === product.id)) {
      alert('Product is already in the cart');
      return;
    }

    localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
    setAddedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="product-container my-5 px-4">
      <Row className="g-4 justify-content-center">
        {products.map(product => (
          <Col key={product.id} md={3} className="d-flex">
            <Card id={`product-${product.id}`} className="custom-card flex-fill">
              <Card.Img variant="top" src={product.image}
              className="img-fluid"
              style={{ height: '150px', objectFit: 'contain', padding: '10px' }} />
              <Card.Body className="d-flex flex-column text-center">
              <div>
              <Card.Title className="fs-6">{product.name}</Card.Title>
              <Card.Text className="text-center p-2">
                <strong className="text-danger">${product.price}</strong> <del className="text-muted">{product.oldPrice}</del>
              </Card.Text>
            </div>
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">{product.discount}</span>


                <Button variant="dark" onClick={() => addToCart(product)} className="mt-auto">
                  <FaShoppingCart style={{ marginRight: '5px' }} /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">
            <FaCheckCircle className="me-2" /> Product Added Successfully!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p><strong>{addedProduct?.name}</strong> has been added to your cart.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Continue Shopping
          </Button>
          <Button variant="success" onClick={handleCloseModal}>
            Go to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductPage;