import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Badge } from 'react-bootstrap';
import { IoCartOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../Redux/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';
import { fetchSearchResults } from '../Redux/searchSlice';
import SearchResults from './SearchResults';
import PropTypes from 'prop-types';

function NavbarComponent({ hideIcons = false }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { searchResults, error } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [localQuery, setLocalQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(updatedCart.length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setLocalQuery(value);

    if (value.trim() === '') {
      dispatch(fetchSearchResults(''));
      return;
    }

    try {
      await dispatch(fetchSearchResults(value)).unwrap();
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          EXCLUSIVE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav muted">
          <Nav className="ms-auto align-items-center">

            <Nav.Link href="/" className="nav-link fs-6 mx-2">Home</Nav.Link>
            <Nav.Link href="#Contact" className="nav-link fs-6 mx-2">Contact</Nav.Link>
            <Nav.Link href="#About" className="nav-link fs-6 mx-2">About</Nav.Link>
            <Nav.Link href="/Register" className="nav-link fs-6 mx-2">Sign Up</Nav.Link>

            <div style={{ position: 'relative', maxWidth: '250px', width: '100%' }}>
              <Form className="d-flex mx-3">
                <Form.Control
                  type="search"
                  placeholder="Search here ...."
                  aria-label="Search"
                  className="rounded-1"
                  value={localQuery}
                  onChange={handleSearchChange}
                  style={{
                    height: '10%',
                    color: darkMode ? '#fff' : 'black',
                    fontSize: '17px',
                    backgroundColor: darkMode ? '#333' : '#cecccc',
                    border: darkMode ? '1px solid #555' : '1px solid rgb(218, 221, 223)',
                    width: '100%',
                  }}
                />
              </Form>

              {searchResults && searchResults.length > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: darkMode ? '#333' : '#fff',
                    border: darkMode ? '1px solid #555' : '1px solid #ddd',
                    borderRadius: '4px',
                    zIndex: 1000,
                    maxHeight: '200px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <SearchResults results={searchResults} />
                </div>
              )}

              {searchResults && localQuery && searchResults.length === 0 && !error && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: darkMode ? '#333' : '#fff',
                    color: 'red',
                    padding: '5px',
                    textAlign: 'center',
                    fontSize: '14px',
                    border: darkMode ? '1px solid #555' : '1px solid #ddd',
                    borderRadius: '4px',
                    zIndex: 1000,
                  }}
                >
                  No results found.
                </div>
              )}

              {error && <p style={{ color: 'red' }}>Error fetching results. Please try again.</p>}
            </div>

            {!hideIcons && (
              <>
                <Nav.Link href="/Wishlist" className="nav-link mx-2">
                  <IoMdHeartEmpty className="fs-3" />
                </Nav.Link>

                <Nav.Link href="/Cart" className="nav-link mx-2 position-relative">
                  <IoCartOutline className="fs-3" />
                  {cartCount > 0 && (
                    <Badge
                      bg="danger"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      {cartCount}
                    </Badge>
                  )}
                </Nav.Link>
              </>
            )}

            <button
              onClick={() => dispatch(toggleTheme())}
              className="btn btn-link mx-2"
              style={{ color: darkMode ? '#fff' : '#000' }}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavbarComponent.propTypes = {
  hideIcons: PropTypes.bool,
};

export default NavbarComponent;
