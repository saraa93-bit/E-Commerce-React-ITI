import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setSearchResults } from '../Redux/searchSlice'; // Import action to clear results

const SearchProduct = () => {
  const dispatch = useDispatch();
  const { searchResults, loading, error } = useSelector((state) => state.search);
  const resultsRef = useRef(null);

  // Hide search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        dispatch(setSearchResults([])); // Clear results when clicking outside
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
    <div ref={resultsRef} aria-live="polite" className="search-results position-relative">
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        // Only show "No results found." if the user has typed something
        searchResults !== null && <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchProduct;
