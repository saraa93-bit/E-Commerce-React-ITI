import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSearchResults, setLoading, setError } = searchSlice.actions;

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    const response = await axios.get('http://localhost:3000/products');
    let data = response.data;

    if (!Array.isArray(data)) {
      throw new Error('Invalid data format: Expected an array');
    }

    console.log('Fetched Data:', data);

    const filteredResults = query
      ? data.filter((item) =>
          item.name?.toLowerCase().includes(query.trim().toLowerCase())
        )
      : [];

    console.log('Filtered Results:', filteredResults);

    dispatch(setSearchResults(filteredResults));
  } catch (error) {
    console.error('Error fetching data:', error);
    dispatch(setError('Failed to fetch products. Please try again.'));
  } finally {
    dispatch(setLoading(false));
  }
};

export default searchSlice.reducer;
