import {  Facebook, Twitter, Instagram, Linkedin } from 'react-bootstrap-icons'; // استيراد الأيقونات

function Footer() {
    return (
        <div>
          <footer className="footer p-4 text-light" style={{ backgroundColor: '#1A1A1A', width: '100%', minHeight: '400px' }}>
            <div className="container">
              <div className="row h-100">
                
                {/* القسم الأول: Subscribe */}
                <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column h-100">
                  <p className="fs-2 fw-bold m-3">Exclusive</p>
                  <p className="fw-bold fs-5 p-3">Subscribe</p>
                  <p className=" m-3">Get 10% off your first order</p>
                  <div className="position-relative" style={{ width: '100%' }}>
                    <input
                      type="text"
                      className="form-control rounded-2"
                      placeholder="Enter your email"
                      style={{ backgroundColor: 'black', border: '1px solid white', color: 'white', fontSize: '14px', paddingRight: '40px' }}
                    />
                    <button className="btn btn-dark rounded-2 position-absolute" 
                      style={{ top: '-10%', right: '-5%', transform: 'translateY(-50%)', border: 'none', background: 'transparent' }}>
                      <img src="../../public/images/Footer/Vector.png" alt="Arrow" style={{ width: '20px', height: '20px' }} />
                    </button>
                  </div>
                </div>
    
                {/* القسم الثاني: Support */}
                <div className="col-lg-2 col-md-6 mb-4 d-flex flex-column h-100">
                  <h5 className="fw-bold fs-5 p-4">Support</h5>
                  <p className="mb-3">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                  <p className="mb-3">exclusive@gmail.com</p>
                  <p className="mb-3">+88015-88888-9999</p>
                </div>
    
                {/* القسم الثالث: Account */}
                <div className="col-lg-2 col-md-6 mb-4 d-flex flex-column h-100">
                  <h5 className="fw-bold fs-5 p-4">Account</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">My Account</a></li>
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">Login / Register</a></li>
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">Cart</a></li>
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">Wishlist</a></li>
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">Shop</a></li>
                  </ul>
                </div>
    
                {/* القسم الرابع: Quick Link */}
                <div className="col-lg-2 col-md-6 mb-4 d-flex flex-column h-100">
                  <h5 className="fw-bold fs-5 p-4">Quick Link</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">Terms Of Use</a></li>
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">FAQ</a></li>
                    <li className="mb-3"><a href="#" className="text-light text-decoration-none">Contact</a></li>
                  </ul>
                </div>
    
                {/* القسم الخامس: Download App */}
                <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column h-100 align-items-start">
                  <h5 className="fw-bold fs-5 p-2 mt-3">Download App</h5>
                  <p className="fs-7 p-2">Save $3 with App New User Only</p>
                  
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img src="../../public/images/Footer/Qr Code.png" alt="QR Code" className="img-fluid" />
                    </div>
                    <div className="d-flex flex-column">
                      <a href="#" className="mb-2">
                        <img src="../../public/images/Footer/AppStore.png" alt="App Store" className="img-fluid" />
                      </a>
                      <a href="#">
                        <img src="../../public/images/Footer/GooglePlay.png" alt="Google Play" className="img-fluid" />
                      </a>
                    </div>
                  </div>
    
                  <div className="mt-auto p-3">
                    <a href="#" className="me-3"><Facebook color="white" size={30} /></a>
                    <a href="#" className="me-3"><Twitter color="white" size={30} /></a>
                    <a href="#" className="me-3"><Instagram color="white" size={30} /></a>
                    <a href="#" className="me-3"><Linkedin color="white" size={30} /></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-12 text-center">
              <p className=" text-secondary">&copy; 2025 Exclusive, All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
}

export default Footer;