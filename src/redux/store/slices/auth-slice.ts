import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CONSTANTS } from "../../../constants/constants";

const initialState: {
  user: null;
  token: string | null;
  isLoading: boolean;
  isError: boolean;
} = {
  user: null,
  token: null,
  isLoading: false,
  isError: false,
};

export const loginUser = createAsyncThunk("loginUser", async (body) => {
  const data = await fetch(`${CONSTANTS.BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return data.json();
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.accessToken;
      localStorage.setItem("token", action.payload.accessToken);
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
