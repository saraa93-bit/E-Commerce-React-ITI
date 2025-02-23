import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../Styles/Wishlist.css";

function Wishlist() {
  const products = [
    { id: 1, name: "RGB liquid CPU Cooler", price: "$1960", image: "/images/product/gammaxx-l240-argb-1-500x500 1.png", rating: 4, reviews: 12 },
    { id: 2, name: "GPII Shooter USB Gamepad", price: "$550", image: "/images/product/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png", rating: 5, reviews: 20 },
    { id: 3, name: "Quilted Satin Jacket", price: "$750", image: "/images/product/ideapad-gaming-3i-01-500x500 1.png", rating: 3, reviews: 8 },
    { id: 4, name: "ASUS FHD Gaming Laptop", price: "$860", discountedPrice: "$1160", image: "/images/product/g92-2-500x500 1.png", rating: 4, reviews: 15 },
    { id: 5, name: "IPS LCD Gaming Monitor", price: "$1160", image: "/images/product/chair.png", rating: 4, reviews: 18 },
    { id: 6, name: "HAVIT HV-692 Gamepad", price: "$560", image: "/images/product/g27cq4-500x500 1.png", rating: 5, reviews: 22 },
    { id: 7, name: "AK-900 Wired Keyboard", price: "$200", image: "/images/product/image 63.png", rating: 4, reviews: 10 }
  ];

  return (
    <div className="wishlist-container-custom">
      <div className="container">
        <h1 className="text-center mx-1 my-4">Wishlist</h1>

        <div className="text-end mb-4">
          <button className="btn btn-success">Move All To cart</button>
        </div>

        <div className="row">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="wishlist-card-custom h-100 d-flex flex-column position-relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="wishlist-product-img-custom w-50 mx-auto d-block"
                />
                <div className="wishlist-card-body-custom text-center mt-auto">
                  <h5 className="wishlist-card-title-custom">{product.name}</h5>
                  <p className="wishlist-card-text-custom">
                    {product.discountedPrice ? (
                      <>
                        <span className="text-danger">{product.price}</span>{" "}
                        <span className="text-muted text-decoration-line-through">{product.discountedPrice}</span>
                      </>
                    ) : (
                      product.price
                    )}
                  </p>
                  <button className="btn btn-dark my-2 w-75">
                    <i className="bi bi-cart"></i> Add To Cart
                  </button>
                  <i className="bi bi-trash wishlist-delete-icon-custom text-danger position-absolute top-0 end-0 m-2" role="button"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center my-4">Just For You</h2>
        <div className="text-end mb-4">
          <Link to="/ProductPage" className="btn btn-link">See All</Link>
        </div>

        <div className="row">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="wishlist-justforu-card-custom h-100 d-flex flex-column position-relative">
                <img src={product.image} alt={product.name} className="wishlist-justforu-img-custom w-75 mx-auto d-block" />
                <div className="position-absolute top-0 end-0 m-2 bg-light rounded-circle p-2">
                  <i className="bi bi-eye"></i>
                </div>
                <div className="wishlist-justforu-body-custom text-center mt-auto">
                  <button className="btn btn-dark w-100 mb-2">
                    <i className="bi bi-cart"></i> Add To Cart
                  </button>
                  <h5 className="wishlist-justforu-title-custom">{product.name}</h5>
                  <p className="wishlist-justforu-text-custom">
                    {product.discountedPrice ? (
                      <>
                        <span className="text-danger">${product.discountedPrice}</span>{" "}
                        <span className="text-muted text-decoration-line-through">${product.price}</span>
                      </>
                    ) : (
                      <span className="text-danger">{product.price}</span>
                    )}
                  </p>
                  <div className="d-flex justify-content-center">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`bi ${i < product.rating ? "bi-star-fill text-warning" : "bi-star text-secondary"}`}
                      ></i>
                    ))}
                    <span className="ms-2 text-muted">({product.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Wishlist;
