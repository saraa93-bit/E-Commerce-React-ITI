import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSearchResults } from '../Redux/searchSlice';
import '../Styles/SearchProduct.css';


const SearchProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchResults, loading, error } = useSelector((state) => state.search);
  const resultsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        dispatch(setSearchResults([]));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center my-3">
        <span className="spinner-border text-primary" role="status"></span>
        <span className="ms-2">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center my-3">Error: {error}</div>;
  }

  return (
    <div ref={resultsRef} className="search-results position-relative">
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((product) => (
            <li
              key={product.id}
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={() => {
                navigate(`/ProductPage#${product.id}`);
                dispatch(setSearchResults([]));
              }}
            >
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        searchResults !== null && <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchProduct;
