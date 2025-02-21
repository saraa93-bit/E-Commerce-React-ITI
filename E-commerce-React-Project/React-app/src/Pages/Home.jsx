import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaGamepad, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoWatchOutline } from "react-icons/io5";


const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('Camera');
  const [openCategories, setOpenCategories] = useState({
    womensFashion: false,
    mensFashion: false
  });

  const categories = [
    { name: 'Phones', icon: <FaMobileAlt /> },
    { name: 'Computers', icon: <FaDesktop /> },
    { name: 'SmartWatch', icon: <IoWatchOutline /> },
    { name: 'Camera', icon: <FaCamera /> },
    { name: 'HeadPhones', icon: <FaHeadphones /> },
    { name: 'Gaming', icon: <FaGamepad /> }
  ];

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div >
      <Container fluid className="mt-3">
        <Row className="gx-4 gy-4">
          <Col xs={12} md={3} style={{ position: 'sticky', top: '0', height: '100vh', padding: '20px' }}>
            <ul className="list-group">
              <li className="list-group-item mb-2" onClick={() => toggleCategory('womensFashion')} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Womans Fashion
                <FaChevronRight style={{ transform: openCategories.womensFashion ? 'rotate(90deg)' : 'rotate(0deg)', transition: '0.3s' }} />
              </li>
              {openCategories.womensFashion && (
                <ul className="list-group mt-2 ms-3 mb-2">
                  <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Dresses</a></li>
                  <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Shoes</a></li>
                  <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Accessories</a></li>
                </ul>
              )}

              <li className="list-group-item mb-2" onClick={() => toggleCategory('mensFashion')} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Mens Fashion
                <FaChevronRight style={{ transform: openCategories.mensFashion ? 'rotate(90deg)' : 'rotate(0deg)', transition: '0.3s' }} />
              </li>
              {openCategories.mensFashion && (
                <ul className="list-group mt-2 ms-3 mb-2">
                  <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Shirts</a></li>
                  <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Pants</a></li>
                  <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Shoes</a></li>
                </ul>
              )}

              <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Electronics</a></li>
              <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Home & Lifestyle</a></li>
              <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Medicine</a></li>
              <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Sports & Outdoor</a></li>
              <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Babys & Toys</a></li>
              <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Groceries & Pets</a></li>
              <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Health & Beauty</a></li>
            </ul>
          </Col>

          <Col xs={12} md={9}>
            <Card className="mb-4 d-flex flex-row align-items-center p-3" style={{ backgroundColor: '#000', color: '#fff', position: 'relative', top: '0' }}>
              <div className="p-4" style={{ width: '50%' }}>
                <div className="d-flex align-items-center p-3 mt-3">
                  <img src="/images/product/1200px-Apple_gray_logo 1.png" alt="Apple Logo" style={{ padding: '6px', width: '50px', marginBottom: '0' }} />
                  <Card.Title style={{ fontSize: '14px', marginLeft: '10px', marginBottom: '0' }}>iPhone 14 Series</Card.Title>
                </div>
                <Card.Text style={{ fontSize: '2.9rem', fontWeight: 'bold' }}>Up to 10% off Voucher</Card.Text>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '10px' }}>Shop Now</span>
                  <span style={{ fontSize: '2.5rem' }}>→</span>
                </a>
              </div>
              <Card.Img variant="top" src="/images/product/hero_endframe__cvklg0xk3w6e_large 2.png" className="img-fluid" style={{ width: '50%', objectFit: 'contain' }} />
              <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#777' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#777' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#e74c3c' }}></span>
              </div>
            </Card>

  <Container fluid className="mt-5 px-0 w-100">
  {/* عنوان القسم والتايمر */}
          <Row className="mb-4 px-4">
               <Col xs={12} className="m-2 d-flex justify-content-between align-items-center">
                 <h4 className="m-2 f-bold fs-2 ">Flash Sales</h4>

               </Col>
          </Row>

  {/* المنتجات */}
  
         <Row className="gx-3 gy-4 px-4 ms-0 ps-0">
           {[
      { name: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', discount: '-40%', img: '/images/product/g92-2-500x500 1.png', rating: 88 },
      { name: 'AK-900 Wired Keyboard', price: '$960', oldPrice: '$1160', discount: '-35%', img: '/images/product/ak-900-01-500x500 1 (1).png', rating: 75 },
      { name: 'IPS LCD Gaming Monitor', price: '$370', oldPrice: '$400', discount: '-30%', img: '/images/product/g27cq4-500x500 1.png', rating: 99 },
      { name: 'S-Series Comfort Chair', price: '$375', oldPrice: '$400', discount: '-25%', img: '/images/product/chair.png', rating: 99 },
       ].map((product, idx) => (
      <Col xs={12} sm={6} md={4} lg={3} key={idx}>
        <Card className="h-100 shadow-sm">
          <div className="position-relative">
            {/* الصورة مع تحديد ارتفاع ثابت */}
            <Card.Img
              variant="top"
              src={product.img}
              className="img-fluid"
              style={{ height: '150px', objectFit: 'contain', padding: '10px' }}
            />
            {/* الخصم */}
            <span className="badge bg-danger position-absolute top-0 start-0 m-2">{product.discount}</span>
          </div>
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="fs-6">{product.name}</Card.Title>
              <Card.Text className="text-center p-2">
                <strong className="text-danger">{product.price}</strong> <del className="text-muted">{product.oldPrice}</del>
              </Card.Text>
            </div>
            {/* زر الإضافة إلى السلة */}
            <Button variant="dark" className="w-75 mt-2">Add To Cart</Button>
          </Card.Body>
        </Card>
        
      </Col>
    ))}
     <div className="text-center  mt-4">
     <Link to="/ProductPage">
    <Button variant="danger">View All Products</Button>
  </Link>
    </div>
  </Row>
</Container>

             
           
          </Col>
        </Row>

        <div className="my-5 text-center m-2 g-2">
          <p className="section-label">Categories</p>
          <h2 className="section-title p-3">Browse By Category</h2>
          <div className="d-flex justify-content-center flex-wrap gap-3 fs-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`p-3 border rounded text-center ${activeCategory === cat.name ? 'bg-danger text-white' : ''}`}
                onClick={() => setActiveCategory(cat.name)}
                style={{ cursor: 'pointer', width: '120px' }}
              >
                {cat.icon}
                <p>{cat.name}</p>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-1 mt-3">
            <Button variant="outline-secondary"><FaArrowLeft /></Button>
            <Button variant="outline-secondary"><FaArrowRight /></Button>
          </div>
        </div>
      </Container>


    <Container className="new-arrival my-5 m-5 p-5">
      <div className="section-header">
        <span className="featured">Featured</span>
        <h2>New Arrival</h2>
      </div>
      <Row>
        <Col md={6} className="mb-5">
          <Card className="main-card text-white bg-dark">
            <Card.Img className="w-50" src="/images/product/ps5-slim-goedkope-playstation_large 1.png" alt="PlayStation 5" />
            <Card.ImgOverlay>
              <Card.Title>PlayStation 5</Card.Title>
              <Card.Text>
                Black and White version of the PS5 coming out on sale.
              </Card.Text>
              <Button variant="light">Shop Now</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md={6}>
          <Row>
            <Col md={12} className="mb-4">
              <Card className="text-white bg-dark">
                <Card.Img className="w-50" src="/images/product/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png" alt="Women's Collections" />
                <Card.ImgOverlay>
                  <Card.Title>Womens Collections</Card.Title>
                  <Card.Text>
                    Featured woman collections that give you another vibe.
                  </Card.Text>
                  <Button variant="light">Shop Now</Button>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="text-white">
                <Card.Img src="/images/product/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" alt="Speakers" />
                <Card.ImgOverlay>
                  <Card.Title>Speakers</Card.Title>
                  <Card.Text>
                    Amazon wireless speakers
                  </Card.Text>
                  <Button variant="light">Shop Now</Button>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="text-white">
                <Card.Img src="/images/product/652e82cd70aa6522dd785109a455904c.png" alt="Perfume" />
                <Card.ImgOverlay>
                  <Card.Title>Perfume</Card.Title>
                  <Card.Text>
                    GUCCI INTENSE OUD EDP
                  </Card.Text>
                  <Button variant="light">Shop Now</Button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default HomePage;