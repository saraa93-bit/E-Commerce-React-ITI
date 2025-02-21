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
    const response = await axios.get('http://localhost:3001/products'); // تأكد من صحة المسار
    let data = response.data;

    // إذا كان ملف JSON يحتوي على كائن يحتوي على مصفوفة:
    if (data.items) {
      data = data.items;
    }

    console.log('Fetched Data:', data);

    // التأكد من أن `data` هو مصفوفة قبل محاولة التصفية
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format: Expected an array');
    }

    // تنفيذ البحث فقط إذا كان `query` غير فارغ
    const filteredResults = query
      ? data.filter((item) =>
          item.name?.toLowerCase().includes(query.toLowerCase())
        )
      : [];

    console.log('Filtered Results:', filteredResults);

    dispatch(setSearchResults(filteredResults));
  } catch (error) {
    console.error('Error fetching data:', error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default searchSlice.reducer;
