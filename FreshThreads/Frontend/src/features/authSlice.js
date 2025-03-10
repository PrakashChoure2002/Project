import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from ' ';

// Async thunk for signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/users/signup', userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Signup failed');
    }
  }
);

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/users/signin', userData);
      console.log("Login Response:", response.data);

      const token = response.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('role', response.data.role);

      // Decode the token to extract userId
      let decodedToken;
      try {
        decodedToken = jwtDecode(token);
      } catch (error) {
        return rejectWithValue('Invalid token');
      }
      console.log("Decoded Token:", decodedToken);

      return {
        token,
        role: response.data.role,
        user: {
          email: response.data.email || userData.email,
          userId: decodedToken.userId || decodedToken.id, // Added userId
        },
      };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

// Fetch user profile using userId
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);

      const userId = decodedToken.Id; // 
      console.log("User ID:", userId);
      console.log(`API URL: http://localhost:5161/api/User/${userId}`);


      const response = await axios.get(`http://localhost:5161/api/Users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("hii",response);

      return response.data;
      
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to fetch user profile');
    }
  }
);




// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    role: null,
    email: null,
    userId: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.email = null;
      state.userId = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.email = action.payload.user?.email || '';
        state.userId = action.payload.user?.userId || null;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Update user profile data
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
