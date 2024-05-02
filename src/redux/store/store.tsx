// global store
import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/project-slice";
import authSlice from "./slices/auth-slice";

const store = configureStore({
  reducer: {
    project: projectReducer,
    auth: authSlice,
  },
});

export default store;
